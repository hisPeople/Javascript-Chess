//TODO: controller

function controller(historyAnalyzer, moveHistory){
	this.historyAnalyzer = historyAnalyzer;
	this.moveHistory = moveHistory;
	
	this.boardDisplay = null;
	this.whiteTeam = null;
	this.blackTeam = null;
	this.whitePlayer = null;
	this.blackPlayer = null;
	this.currentPlayer = null;
}

//TODO: this 'class' should 'implement' the IcheckListener 'interface'

function getPawnMovedTwoMove(pawnMovedTwoLocation){
	var from = new location(pawnMovedTwoLocation.getRow() == 3 ? 1 : 6, pawnMovedTwoLocation.getColumn());
	return new move(from, pawnMovedTwoLocation);
}

function getPieceFromTypeString(typeString, promotionListener){
	var promoPiece = null;
	if(typeString == "king"){
		promoPiece = new king(this);
	} else if(typeString == "queen"){
		promoPiece = new queen();
	} else if(typeString == "rook"){
		promoPiece = new rook();
	} else if(typeString == "bishop"){
		promoPiece = new bishop();
	} else if(typeString == "knight"){
		promoPiece = new knight();
	} else if(typeString == "pawn"){
		promoPiece = new pawn(promotionListener);
	}
	return promoPiece;
}

// TODO: get current game state -- yikes!
function getCurrentGameState(){
	
}

// TODO: play
function play(){
	
}

function tryMove(move){
	this.board.tryMove(move);
	this.togglePlayers();
}

function togglePlayers(){
	this.currentPlayer = (this.currentPlayer == this.whitePlayer) ? this.blackPlayer : this.whitePlayer;
}

function getPiece(location){
	return this.board.getPiece(location);
}

// TODO: build team
function buildTeam(teamColor){
	
}

// TODO: buildTeamPawns
function buildTeamPawns(team,promotionListener){
	
}

function setupPiece(piece,location,team){
	team.add(piece);
	this.board.placePiece(piece,location);
}

// TODO: get piece image
function getPieceImage(piece){
	
}

function isInCheck(team){
	var kingsLocation = team.getKing().getLocation();
	var attackingTeam = (team == this.whiteTeam) ? this.blackTeam : this.whiteTeam;
	return attackingTeam.canAttack(this.board,kingsLocation);
}

// TODO: can move 
function canMove(team){
	var ableToMove = false;
	// for iterator
		// for iterator
	return ableToMove;
}

function isCheckmate(){
	var currentTeam = this.currentPlayer.getTeam();
	return this.isInCheck(currentTeam) && !this.canMove(currentTeam);
}

// TODO: isStalemate
function isStalemate(){
	
}

// TODO: isStalematePieceCombination
function isStalematePieceCombination(){
	
}

// TODO: isStalemateBishopPieceCombination
function isStalemateBishopPieceCombination(){
	
}

// TODO: getPieceTypeAt
function getPieceTypeAt(location, class){
	
}

function hasFiftyMovesWithCapturesOrPawnMoves(){
	return this.board.hasFiftyMovesWithNoCapturesOrPawnMoves();
}

// TODO: isThreefoldRepetition
function isThreefoldRepetition(){
	
}

// @override
// TODO: movePiece
function movePiece(move, capturePiece){
	
}

// @override
// TODO: placePiece
function placePiece(piece,location){
	
}

// @override
// TODO: removePiece
function removePiece(location){
	
}

function getMostRecentMoveDescription(){
	return this.board.getMostRecentMoveDescription();
}

function untryMove(){
	this.togglePlayers();
	this.board.undoTriedMove();
}

function getCurrentTeam(){
	return this.currentPlayer.getTeam();
}

function getPossibleMovesForCurrentTeam(){
	return this.currentPlayer.getTeam.getMoves(this.board);
}

// TODO: getPossibleMoves iterator<move>
function getPossibleMoves(location){
	
}

// TODO: getGameHistory iterator<extendedMove>
function getGameHistory(){
	
}

function getBoard(){
	return this.board;
}

function getCurrentPlayer(){
	return this.currentPlayer;
}

























