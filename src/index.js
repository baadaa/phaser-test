import Phaser from 'phaser';
import { timingSafeEqual } from 'crypto';
import skyAsset from './assets/sky.png';
import groundAsset from './assets/platform.png';
import starAsset from './assets/star.png';
import bombAsset from './assets/bomb.png';
import dudeAsset from './assets/dude.png';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload,
    create,
  },
};

let platforms;
let player;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', skyAsset);
  this.load.image('ground', groundAsset);
  this.load.image('star', starAsset);
  this.load.image('bomb', bombAsset);
  this.load.spritesheet('dude', dudeAsset, { frameWidth: 32, frameHeight: 48 });
}

function create() {
  this.add.image(400, 300, 'sky');
  platforms = this.physics.add.staticGroup();
  platforms
    .create(400, 568, 'ground')
    .setScale(2)
    .refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300);
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
}
