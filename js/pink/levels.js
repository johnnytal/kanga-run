var levels = function(game){};

levels.prototype = {
    create: function(){
        /*bg = this.add.image(0, 0, 'inst_bg');
        bg.alpha = 0.25;*/
        
        bg_level = this.add.image(-14, 8, 'level_select');
        bg_level.alpha = 0.8;
                
        initAd();

        audio_btn = this.add.button(740, 25, 'audioBtn', toggleSound, this);
        //audio_btn.input.useHandCursor = true;
        if (game.sound.mute) audio_btn.frame = 1;

        var level_w = [];
        var n_of_levels = 8;
        
        for (n=0; n < n_of_levels; n++){
            level_w[n] = this.add.sprite(89 * (n+1) - 45, 160, 'level_bg');
            level_w[n].tint = 0xaf5ff3 * ((n+1) * 1.8);
            level_w[n].alpha = 0.2;   
        }

        var levels = [];
        var n_of_levels = 8;
       
        for (n=0; n < n_of_levels; n++){
            var bestScore = localStorage.getItem("elephant-record" + (n+1));
            var bestTime = localStorage.getItem("elephant-timeTakenRecord" + (n+1));
            var bestPercent = localStorage.getItem("elephant-percentRecord" + (n+1));
            var bestSpeed = localStorage.getItem("elephant-speedRecord2" + (n+1));
            
            var levelSprite;
            
            if (bestScore == null){
                bestScore = 0; 
                levelSprite = 'lock';
 
                if(localStorage.getItem("elephant-record" + n) != null || n == 0){
                    levelSprite = 'numbers';
                }
            } 
            else{
                levelSprite = 'numbers';
            }
            var space = 88;
            
            levels[n] = game.add.sprite(53 + (space * n + 5), 190, levelSprite);
            levels[n].frame = n;
            levels[n].inputEnabled = true;
            levels[n].scale.set(2.3, 1.8);
           
            var best = game.add.sprite(53 + (space * n), 267, bestScore + 'star');
            best.scale.set(0.3,0.3);
            
            var timeLabel;
            if (bestTime == null || bestScore == 0){
                timeLabel = '       -';
            }
            else{ timeLabel = '  ' + bestTime + ' s'; }
            bestTimeLabel = this.add.text(58 + (space * n), 310, timeLabel, {
                font: '15px ' + font, fill: 'darkblue', fontWeight: 'normal', align: 'center',
                stroke: 'white', strokeThickness: 1
            });
            
            var percentLabel;
            if (bestPercent == null){
                percentLabel = '       -';
            }
            else{ percentLabel = '  ' + bestPercent + '%' ; }
            bestPercentLabel = this.add.text(58 + (space * n), 370, percentLabel, {
                font: '15px ' + font, fill: 'darkgreen', fontWeight: 'normal', align: 'center',
                stroke: 'white', strokeThickness: 1
            });
            
            var speedLabel;
            if (bestSpeed == null){
                speedLabel = '       -';
            }
            else{ speedLabel = bestSpeed + ' mph' ; }
            bestSpeedLabel = this.add.text(56 + (space * n), 430, speedLabel, {
                font: '15px ' + font, fill: 'purple', fontWeight: 'normal', align: 'center',
                stroke: 'white', strokeThickness: 1
            });
        }
       
        for (x=0; x < n_of_levels; x++){
            levels[x].events.onInputDown.add(upload, this);
        }  
    }
};

function upload(_level){
    if (_level.key != 'lock'){
        var start_level = (_level.frame + 1);
        attr.currentLevel = start_level;
        this.game.state.start("Game");
    }
}

function initAd(){
    var admobid = {};

    admobid = {
        interstitial: 'ca-app-pub-9795366520625065/6752478241'
    };
    
    try{
        if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false, isTesting:false} );
    } catch(e){}
}

function toggleSound(){
    if (game.sound.mute == false){
        game.sound.mute = true;
        audio_btn.frame = 1;
    }
    else{
        game.sound.mute = false;
        audio_btn.frame = 0;
    }  
    //audio_btn.input.useHandCursor = true;
}
