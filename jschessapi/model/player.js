function player(team){
	this.team = team;
	
	this.getTeam = getTeam;
	this.getMove = getMove;
	this.getPromotionListener = getPromotionListener;
	this.isLegalMove = isLegalMove;
	this.causesCheckmate = causesCheckmate;
}

function getTeam(){
	return this.team;
}

function getMove(){
	console.error("getMove() has not been overridden");
}

function getPromotionListener(){
	console.error("getPromotionListener() has not been overridden")
}
