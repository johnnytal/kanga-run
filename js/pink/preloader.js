var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        // create progress % text
        this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px ' + font, fill: 'green', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
    
        // create progress bar
        var loadingBar = this.add.sprite(this.game.world.centerX - 55,  this.game.world.centerY + 40, "elephant");
        loadingBar.anchor.setTo(0, 0.5);
        this.load.setPreloadSprite(loadingBar);
        
        // load assets
        this.game.load.image("finish_line", "assets/elephant/images/finish_line.png");
        this.game.load.image("pretzel", "assets/elephant/images/pizza.png");
        this.game.load.image("pretzel_s", "assets/elephant/images/pizza_s.png");
        this.game.load.image("pretzel_p", "assets/elephant/images/pizza_p.png");
        this.game.load.image("rain", "assets/elephant/images/rain.png");
        this.game.load.image("inst_bg", "assets/elephant/images/inst_bg.jpg");
        this.game.load.image("sea", "assets/elephant/images/sea.png");
        this.game.load.image("fish", "assets/elephant/images/fish.png");
        this.game.load.image("lighting", "assets/elephant/images/lightning2.png");
        this.game.load.image("clock", "assets/elephant/images/clock2.png");
       
        this.game.load.image("0star", "assets/elephant/images/stars_0.png");
        this.game.load.image("1star", "assets/elephant/images/stars_1.png");
        this.game.load.image("2star", "assets/elephant/images/stars_2.png");
        this.game.load.image("3star", "assets/elephant/images/stars_3.png");
        
        this.game.load.image("window", "assets/elephant/images/panel.png");
        this.game.load.image("level_select", "assets/elephant/images/level_select.png");
        this.game.load.image("level_complete", "assets/elephant/images/level_complete.png");
        this.game.load.image("level_bg", "assets/elephant/images/level_bg.png");
        this.game.load.image("ok", "assets/elephant/images/ok.png");
        this.game.load.image("menu", "assets/elephant/images/menu.png");
        this.game.load.image("replay", "assets/elephant/images/replay.png");
        this.game.load.image("lock", "assets/elephant/images/lock.png");
        this.game.load.image("swipe", "assets/elephant/images/swipe.png");

        this.game.load.spritesheet("bg","assets/elephant/images/blue_land.jpg", 2403 ,1024);
        this.game.load.spritesheet("clouds","assets/elephant/images/clouds2.png", 200 ,691/6);
        this.game.load.spritesheet("numbers","assets/elephant/images/numbers.png", 28 ,28);
        this.game.load.spritesheet("Elephant_sprite","assets/elephant/images/roo2.png", 100, 131);
        this.game.load.spritesheet("tornado_sprite","assets/elephant/images/tornado_sprite.png",187/5 ,62);
        this.game.load.spritesheet("bee","assets/elephant/images/bee_sprite.png",70 ,53);
        this.game.load.spritesheet("balloon_sprite","assets/elephant/images/balloons.png",54 ,195);
        this.game.load.spritesheet("audioBtn","assets/elephant/images/audio.png",39 ,39);
        this.game.load.spritesheet("island", "assets/elephant/images/island.png", 156, 129/3);

        this.game.load.audio('music1', 'assets/elephant/audio/music1.ogg'); 
        this.game.load.audio('music2', 'assets/elephant/audio/music2.ogg');
        this.game.load.audio('add_baloon', 'assets/elephant/audio/add_baloon.ogg'); 
        this.game.load.audio('bird', 'assets/elephant/audio/bird.ogg'); 
        this.game.load.audio('chew', 'assets/elephant/audio/chew.ogg'); 
        this.game.load.audio('cloud', 'assets/elephant/audio/cloud.ogg'); 
        this.game.load.audio('deflate', 'assets/elephant/audio/deflate.ogg'); 
        this.game.load.audio('drowning', 'assets/elephant/audio/drowning.ogg'); 
        this.game.load.audio('end_level', 'assets/elephant/audio/end_level.ogg'); 
        this.game.load.audio('fish_splash', 'assets/elephant/audio/fish_splash.ogg'); 
        this.game.load.audio('lost', 'assets/elephant/audio/lost.ogg'); 
        this.game.load.audio('outofbounds', 'assets/elephant/audio/outofbounds.ogg'); 
        this.game.load.audio('pop_baloon', 'assets/elephant/audio/pop_baloon.ogg'); 
        this.game.load.audio('pop_bird', 'assets/elephant/audio/pop_bird.ogg'); 
    },
    
    create: function(){
        this.game.state.start("Instruct");  
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
   // console.log(progress, cacheKey, success);
};
