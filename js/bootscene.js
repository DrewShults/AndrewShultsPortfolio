export default class BootScene extends Phaser.Scene {
    constructor() {
      super('BootScene');
    }
  
    preload() {
      this.load.image('menuBg', 'assets/ui/menu-bg.png');
      this.load.image('character', 'assets/characters/player.png');
      this.load.image('bullet', 'assets/ui/bullet.png');
    }
  
    create() {
      this.scene.start('MenuScene');
    }
  }
  