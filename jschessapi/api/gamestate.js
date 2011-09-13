function gamestate(pawnMovedTwoLocation,movingTeamColor,pieceDescriptions){
	this.pawnMovedTwoLocation = pawnMovedTwoLocation;
	this.movingTeamColor = movingTeamColor;
	this.pieceDescriptions = pieceDescriptions;
	
	this.getPawnMovedTwoLocation = getPawnMovedTwoLocation;
	this.setPawnMovedTwoLocation = setPawnMovedTwoLocation;
	this.getMovingTeamColor = getMovingTeamColor;
	this.setMovingTeamColor = setMovingTeamColor;
	this.getPieceDescription = getPieceDescription;
	this.setPieceDescription = setPieceDescription;
}

function getPawnMovedTwoLocation(){
	return this.pawnMovedTwoLocation;
}

function setPawnMovedTwoLocation(location){
	this.pawnMovedTwoLocation = location;
}

function getMovingTeamColor(){
	return this.movingTeamColor;
}

function setMovingTeamColor(color){
	this.movingTeamColor = color;
}

function getPieceDescription(location){
	return this.pieceDescriptions[location.getRow()][location.getColumn()];
}

function setPieceDescription(location, pieceDescription){
	this.pieceDescriptions[location.getRow()][location.getColumn()] = pieceDescription;
}