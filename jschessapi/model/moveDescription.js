function moveDescription(move,movingPiece,takenTeam,takenPiece){
	this.move = move;
	this.movingPiece = movingPiece;
	this.takenTeam = takenTeam;
	this.takenPiece = takenPiece;
	this.promotionPiece = null;
	
	this.getMove = getMove;
	this.getMovingPiece = getMovingPiece;
	this.getTakenTeam = getTakenTeam;
	this.getTakenPiece = getTakenPiece;
	this.setTakenPiece = setTakenPiece;
	this.getPromotionPiece = getPromotionPiece;
	this.setPromotionPiece = setPromotionPiece;
}

function getMove(){
	return this.move;
}

function getMovingPiece(){
	return this.movingPiece;
}

function getTakenTeam(){
	return this.takenTeam;
}

function getTakenPiece(){
	return this.takenPiece;
}

function setTakenPiece(takenPiece){
	this.takenPiece = takenPiece;
	this.takenTeam = takenPiece.getTeam();
}

function getPromotionPiece(){
	return this.promotionPiece;
}

function setPromotionPiece(promotionPiece){
	this.promotionPiece = promotionPiece;
}