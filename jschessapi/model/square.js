function square(){
	this.piece = null;
	
	this.isEmpty = isEmpty;
	this.putPiece = putPiece;
	this.getPiece = getPiece;
	this.removePiece = removePiece;
}

function isEmpty(){
	return piece == null;
}

function putPiece(piece){
	this.piece = piece;
}

function getPiece(){
	return this.piece;
}

function removePiece(){
	var temp = this.piece;
	this.piece = null;
	return temp;
}