enchant();

var PATH_CHARA = 'chara1.gif';
var COLOR_BG = '#eef';      //背景色

var game;


window.onload = function(){
    game = new Game(SCREEN_SIZE_X, SCREEN_SIZE_Y);
    game.preload(PATH_CHARA);
    game.onload = function(){
        game.rootScene.backgroundColor = COLOR_BG;
        };
    game.start();
};
