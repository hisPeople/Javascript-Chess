	function boardSquare() {
		this.piece = null;
		this.getPiece = getPiece;
		this.setPiece = setPiece;
	}

	function getPiece() {
		return this.piece;
	}

	function setPiece(piece) {
		this.piece = piece;
	}