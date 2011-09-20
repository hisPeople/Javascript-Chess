	function getPieceFromLocation(location) {
		return brd.boardSquares[location.getCol()][location.getRow()]
				.getPiece();
	}

	function setGameState(gameState) {
		this.movingTeamColor = gamesState.movingTeamColor;

	}

	function buildTeam(color) {
		var mainRow = (color == "white") ? 7 : 0;
		var t = new team(color);
		setupPiece(new king(color), new location(mainRow, 4), t);
		setupPiece(new queen(color), new location(mainRow, 3), t);
		setupPiece(new bishop(color), new location(mainRow, 2), t);
		setupPiece(new bishop(color), new location(mainRow, 5), t);
		setupPiece(new knight(color), new location(mainRow, 1), t);
		setupPiece(new knight(color), new location(mainRow, 6), t);
		setupPiece(new rook(color), new location(mainRow, 0), t);
		setupPiece(new rook(color), new location(mainRow, 7), t);

		buildTeamPawns(t);
		return t;
	}

	function buildTeamPawns(team) {
		var pawnRow = (team.color == "white") ? 6 : 1;
		for ( var i = 0; i < 8; i++) {
			setupPiece(new pawn(team.color), new location(pawnRow, i), team);
		}
	}

	function setupPiece(piece, location, team) {
		team.add(piece);
		brd.placePiece(piece, location);

	}