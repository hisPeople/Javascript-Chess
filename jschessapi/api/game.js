function game(humanPlayerColor){
	this.humanPlayerColor = humanPlayerColor;
	this.getGameState = getGameState;
}

function getGameState(){
	return this.controller.getCurrentGameState();
}

function makeMove(extendedMove){
	var promotionPieceType = extendedMove.getPromotionPieceType();
	if(this.controller.getCurrentPlayer() == "human" ){
		
	}
}