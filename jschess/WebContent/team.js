	function team(color) {
		this.color = color;
		this.pieces = new Array();
		this.add = addPiece;
	}

	function addPiece(piece) {
		this.pieces.push(piece);
	}