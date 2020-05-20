var instruct = function(game){};

instruct.prototype = {
    create: function(){
        bg = this.add.button(0, 0, 'inst_bg');
        bg.alpha = 0.5;
        //bg.input.useHandCursor = true;
        
        setTimeout(function(){
            try{
                StatusBar.hide();
            } catch(e){}   
        }, 1000);

        instbgsmall = this.add.sprite(105, 95, 'window');
        instbgsmall.alpha = 0.7;
        instbgsmall.scale.set(2, 1.25);
        
        nameLabel = this.game.add.text(122, 0, 'K A N G A', {
            font: '70px ' + font, fill: 'white', align: 'center',
            stroke: 'purple', strokeThickness: 12
        });
        game.add.tween(nameLabel).from( { x: -1000 }, 600, Phaser.Easing.Linear.None, true);
        
        nameLabel2 = this.game.add.text(465, 18, 'R U N', {
            font: '70px ' + font, fill: 'white', align: 'center',
            stroke: 'purple', strokeThickness: 12
        });
        game.add.tween(nameLabel2).from( { x: -1000 }, 1000, Phaser.Easing.Linear.None, true);

        swipe = this.add.sprite(140, 295, 'swipe');
        swipe.scale.set(0.7, 0.7);
        swipe.alpha = 0.7;

        howToText = this.game.add.text(147, 240, 
            'Swipe sideways to Add & Release balloons', {
            font: '24px ' + font, fill: 'darkgreen', fontWeight: 'normal', align: 'center',
            stroke: 'lightyellow', strokeThickness: 4
        });
        
        tornado = this.add.sprite(590, 180, 'tornado_sprite');

        howToText2 = this.game.add.text(180, 135, 
            "Finish the level before the tornado hits!", {
            font: '22px ' + font, fill: 'darkblue', fontWeight: 'normal', align: 'center',
            stroke: 'lightyellow', strokeThickness: 7
        });
        
        balloon = this.add.sprite(590, 315, 'balloon_sprite');
        balloon.frame = 1;
        balloon.scale.set(0.6,0.5);
        balloon.angle = 15;
        
        howToText3 = this.game.add.text(260, 350, 
            "Don't drift off the screen...", {
            font: '22px ' + font, fill: 'maroon', fontWeight: 'normal', align: 'center',
            stroke: 'lightyellow', strokeThickness: 7
        });
        
        pauseText = this.game.add.text(300, 565, 
            'Double tap to toggle pause', {
            font: '17px ' + font, fill: 'darkblue', fontWeight: 'normal', align: 'center',
            stroke: 'white', strokeThickness: 1
        });

        pressText = this.game.add.text(220, 470, "Tap anywhere to begin", {
            font: '32px ' + font, fill: 'brown', fontWeight: 'normal', align: 'center',
            stroke: 'white', strokeThickness: 10
        });
        
        creditText = this.game.add.text(630, 549, 
            "A game by iLyich Games", {
            font: '14px ' + font, fill: 'darkgreen', fontWeight: 'normal', align: 'center'
        });
        
        nameLabel.alpha = 0;
        game.add.tween(nameLabel).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
        nameLabel2.alpha = 0;
        game.add.tween(nameLabel2).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
        howToText.alpha = 0;
        game.add.tween(howToText).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
        howToText2.alpha = 0;
        game.add.tween(howToText2).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
        howToText3.alpha = 0;
        game.add.tween(howToText3).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true);
    },
    
    update: function(){
        if(game.input.activePointer.isDown){
            this.game.state.start("Levels");
        }  
    }
 }; 