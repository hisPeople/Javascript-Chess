// abstract super class (well not really abstract because its javascript
// but it acts like an abstract class in java
function piece(location,hasMoved,team){
	this.location = location;
	this.hasMoved = hasMoved;
	this.team = team;
	
	this.setLocation = setLocation;
	this.getLocation = getLocation;
	this.hasMoved = hasMoved;
	this.incrementMoveCount = incrementMoveCount;
	this.decrementMoveCount = decrementMoveCount;
	this.setTeam = setTeam;
	this.getTeam = getTeam;
	this.getLegalMoves = getLegalMoves;
	this.canAttack = canAttack;
	this.isLegalMove = isLegalMove;
}

function setLocation(location){
	this.location = location;
}

function getLocation(){
	return this.location;
}

function hasMoved(){
	return this.moveCount > 0;
}

function incrementMoveCount(){
	this.moveCount++;
}

function decrementMoveCount(){
	this.moveCount--;
}

function setTeam(team){
	this.team = team;
}

function getTeam(){
	return this.team;
}

// TODO: mimic an iterator using js
function getLegalMoves(board){
	//if not overridden:
	console.error("getLegalMoves(board) has not been overridden");
}

// TODO: implement canAttack
function canAttack(board, location){
	var attacks = false;
	/*
	  for (Iterator<Location> e = getLegalMoves(board); !attacks && e.hasNext(); ) {
			Location location = e.next();
			attacks = target.equals(location);
		}
	 */
	return attacks;
}

// TODO: implement isLegalMove
function isLegalMove(board, move){
	var isLegal = false;
	/*
	 for (Iterator<Location> e = getLegalMoves(board); !isValid && e.hasNext(); ) {
			Location there = e.next();
			isValid = there.equals(move.getTo());
		}
	 */
	return isLegal;
}

king.prototype = new piece();
king.constructor = king;
function king(location,hasMoved,team){
	this.getLegalMoves = function(board){
		// TODO: override getLegalMoves for king
	};
}

queen.prototype = new piece();
queen.constructor = queen;
function queen(location,hasMoved,team){
	this.getLegalMoves = function(board){
		// TODO: override getLegalMoves for queen
	};
}

rook.prototype = new piece();
rook.constructor = rook;
function rook(location,hasMoved,team){
	this.getLegalMoves = function(board){
		// TODO: override getLegalMoves for rook
	};
}

knight.prototype = new piece();
knight.constructor = knight;
function knight(location,hasMoved,team){
	this.getLegalMoves = function(board){
		// TODO: override getLegalMoves for knight
	};
}

bishop.prototype = new piece();
bishop.constructor = bishop;
function bishop(location,hasMoved,team){
	this.getLegalMoves = function(board){
		// TODO: override getLegalMoves for bishop
	};
}

pawn.prototype = new piece();
pawn.constructor = pawn;
function pawn(location,hasMoved,team){
	this.getLegalMoves = function(board){
		// TODO: override getLegalMoves for pawn
	};
}