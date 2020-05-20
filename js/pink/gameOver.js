var game_over = function(game){};

game_over.prototype = {

    preload: function(){},
    
    init: function(score, reason, level, pretzels_percent, highest_speed, time_taken, records){
    
    musicFX.stop();
    
    var encourage = ["Don't give up!", 'Try again!', 'Almost made it!', 'Maybe next time!'];
    
    if (reason == 'end_game'){
        modal.createModal({
                type:"game_over",
                includeBackground: true,
                modalCloseOnInput: false,
                itemsArr: [
                     {
                        type: "image",
                        content: "window",
                        contentScale: 1.5
                    },
                    {
                        type: "text",
                        content: "Time's out...\n" + encourage[game.rnd.integerInRange(0,3)], 
                        fontFamily: font,
                        fontSize: 38,
                        color: "0xFEFF49",
                        offsetY: -70,
                        stroke: "0x000000",
                        strokeThickness: 5
                    },
                    {
                        type: "image",
                        content: "menu",
                        offsetY: 70,
                        offsetX: -50,
                        callback: function () {
                            attr.currentLevel = 1;
                            showAd(game.rnd.integerInRange(0,3));
                            game.state.start('Instruct');  
                        }
                    },
                    {
                        type: "image",
                        content: "replay",
                        offsetY: 70,
                        offsetX: 50,
                        callback: function () {
                            showAd(game.rnd.integerInRange(0,3));
                            game.state.start('Game'); 
                        }
                    }
                ]
            });    
            modal.showModal("game_over");
            
            for (n=0; n<5; n++){
                game.add.tween(modal.getModalItem('game_over',n)).from({ y: - 800 }, 500, Phaser.Easing.Linear.In, true);
            }
    
            /*menuImg = modal.getModalItem('game_over',3);
            replayImg = modal.getModalItem('game_over',4);
            menuImg.input.useHandCursor = true;
            replayImg.input.useHandCursor = true;*/
        }
        
        else if(reason == 'end_level'){
            pretzels.forEach(function(item){
                item.destroy();
            });
            
            clouds.forEach(function(item){
                item.destroy();
            });
            
            fishes.forEach(function(item){
                item.destroy();
            });
        
            modal.createModal({
                type:"nextLevel",
                includeBackground: true,
                modalCloseOnInput: false,
                itemsArr: [
                    {
                        type: "image",
                        content: "level_complete"
                    },
                    {
                        type: "image",
                        content: 'clock',
                        offsetY: -150,
                        offsetX: -175,
                    },
                    {
                        type: "image",
                        content: 'pretzel',
                        contentScale: 0.6,
                        offsetY: -70,
                        offsetX: -175,
                    },
                    {
                        type: "image",
                        content: 'lighting',
                        contentScale: 0.9,
                        offsetY: 10,
                        offsetX: -175,
                    },
                    {
                        type: "text",
                        content: time_taken + " s   " + records[3],
                        fontFamily: font,
                        fontSize: 25,
                        color: "0xEDE6D5",
                        offsetY: -150,
                        offsetX: 10,
                        stroke: "0x000000",
                        strokeThickness: 4
                    },
                    {
                        type: "text",
                        content: pretzels_percent + "%" + "   " + records[1],
                        fontFamily: font,
                        fontSize: 25,
                        color: "0xB4EEB4",
                        offsetY: -70,
                        offsetX: 10,
                        stroke: "0x000000",
                        strokeThickness: 4
                    },
                    {
                        type: "text",
                        content: highest_speed + " mph" + "   " + records[2],
                        fontFamily: font,
                        fontSize: 25,
                        color: "0xF3D96D",
                        offsetY: 10,
                        offsetX: 10,
                        stroke: "0x000000",
                        strokeThickness: 4
                    },
                    {
                        type: "image",
                        content: score+'star',
                        offsetY: 85,
                        contentScale: 0.65
                    },
                    {
                        type: "image",
                        content: "ok",
                        offsetY: 190,
                        callback: function () {
                            if (attr.currentLevel < 8){
                                attr.currentLevel++;
                                attr.gameScore = score;
                                showAd(game.rnd.integerInRange(0,3));
                                game.state.start('Game'); 
                            }
                            else{ // if there are no more levels, go back to levels screen
                                game.state.start('Levels');
                            }
                        }    
                    },
                    {
                        type: "image",
                        content: "menu",
                        offsetY: 190,
                        offsetX: 90,
                        callback: function () {
                            attr.currentLevel = 1;
                            showAd(game.rnd.integerInRange(0,3));
                            game.state.start('Instruct'); 
                        }
                    },
                    {
                        type: "image",
                        content: "replay",
                        offsetY: 190,
                        offsetX: -90,
                        callback: function () {
                            showAd(game.rnd.integerInRange(0,3));
                            game.state.start('Game');
                        }
                    },
                ]
            });
            modal.showModal("nextLevel");  
        
            /*ok = modal.getModalItem('nextLevel',9); 
            menu = modal.getModalItem('nextLevel',10); 
            replay = modal.getModalItem('nextLevel',11);
            ok.input.useHandCursor = true;
            menu.input.useHandCursor = true;
            replay.input.useHandCursor = true;*/
           
            for (n=0; n<12; n++){
                game.add.tween(modal.getModalItem('nextLevel',n)).from({ y: - 800 }, 250, Phaser.Easing.Linear.In, true);
            }
        }
    }   
};

function showAd(rnd){
    if (rnd == 1 || rnd == 2){
        try{
            if(AdMob) AdMob.showInterstitial();
        } catch(e){}
    }
}