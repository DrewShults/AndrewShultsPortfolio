export default class PortfolioScene extends Phaser.Scene {
    constructor() {
      super('PortfolioScene');
    }
  
    init(data) {
      this.mode = data.mode;
    }
  
    create() {
      this.add.text(100, 100, `Portfolio: ${this.mode}`, { fontSize: '24px', fill: '#fff' });
    }
  }
  