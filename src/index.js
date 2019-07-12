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
  scene: {
    preload,
    create,
  },
};

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
  this.add.image(400, 300, 'star');
  // const ground = this.add.image(400, 150, 'ground');
  // const star = this.add.image(400, 150, 'star');
  // const bomb = this.add.image(400, 150, 'bomb');
}
