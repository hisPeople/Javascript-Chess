	
	function makeMove(move) {
		var from = move.to;
		var to = move.from;
		brd.placePiece(pieceOnSelectedLocation, to);
		brd.placePiece(null, from);
		updateImage(pieceOnSelectedLocation.getImage(), from, to);
	}