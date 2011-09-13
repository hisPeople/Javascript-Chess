function team(color){
	this.color = color;
	this.king = null;
	this.workingPieces = new Array();
	
	this.add = add;
	this.remove = remove;
	this.isWhite = isWhite;
	this.getKing = getKing;
	this.canAttack = canAttack;
	this.getPieces = getPieces;
	this.getPieceCount = getPieceCount;
	this.getMoves = getMoves;
	this.onlyHasPieces = onlyHasPieces;
}

function add(piece){
	if(piece instanceof king){
		this.king = piece;
	}
	piece.setTeam(this);
	this.workingPieces.push(piece);
}

function remove(piece){
	this.workingPieces.splice(piece);
	piece.setTeam(null);
}

function isWhite(){
	return this.color == "white";
}

function getKing(){
	return this.king;
}

//TODO: can attack
function canAttack(board,targetLocation){
	
}

//TODO: get pieces iterator<piece>
function getPieces(){
	
}

function getPieceCount(){
	return this.workingPieces.length;
}

//TODO: getMoves iterator<move>
function getMoves(board){
	
}

//TODO: onlyHasPieces
function onlyHasPieces(pieceArray){
	
}












