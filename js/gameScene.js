export default class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
    }
  
    create() {
      this.add.text(100, 100, 'This is the actual game!', { fontSize: '24px', fill: '#fff' });
    }
  }
  