var BOARD_WIDTH = 8;
var BOARD_HEIGHT = 8;
var CELL_WIDTH = 100;
var CELL_HEIGHT = 100;
var OFFSET = .5;

function board(gamestate){
	this.gamestate = gamestate;
	this.draw = draw;
	this.placePiece = placePiece;
	this.setGameState = setGameState;
}

function setGameState(gamestate){
	this.gamestate = gamestate;
}

function placePiece(location){
	
}

function draw(){
	
}

