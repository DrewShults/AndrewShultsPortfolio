export default class MenuScene extends Phaser.Scene {
    constructor() {
      super('MenuScene');
    }
  
    create() {
      this.add.image(400, 300, 'menuBg');
  
      this.menuItems = this.physics.add.group({
        key: 'bullet',
        repeat: 2,
        setXY: { x: 300, y: 200, stepY: 100 }
      });
  
      this.menuLabels = ['Start Game', 'Quick Portfolio', 'Full Stack View'];
      let i = 0;
      this.menuItems.children.iterate((item) => {
        item.setInteractive();
        item.menuOption = this.menuLabels[i++];
      });
  
      this.player = this.physics.add.sprite(700, 300, 'character');
      this.player.setCollideWorldBounds(true);
  
      this.cursors = this.input.keyboard.createCursorKeys();
      this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  
      this.bullets = this.physics.add.group();
  
      this.physics.add.overlap(this.bullets, this.menuItems, this.selectMenuItem, null, this);
    }
  
    update() {
      if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
        const bullet = this.bullets.create(this.player.x - 20, this.player.y, 'bullet');
        bullet.setVelocityX(-300);
      }
  
      if (this.cursors.up.isDown) this.player.setVelocityY(-150);
      else if (this.cursors.down.isDown) this.player.setVelocityY(150);
      else this.player.setVelocityY(0);
    }
  
    selectMenuItem(bullet, item) {
      bullet.destroy();
      switch (item.menuOption) {
        case 'Start Game':
          this.scene.start('GameScene');
          break;
        case 'Quick Portfolio':
          this.scene.start('PortfolioScene', { mode: 'quick' });
          break;
        case 'Full Stack View':
          this.scene.start('PortfolioScene', { mode: 'fullstack' });
          break;
      }
    }
  }
  