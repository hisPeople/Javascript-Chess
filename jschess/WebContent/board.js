	function board() {
		var x = new Array(8);
		for ( var i = 0; i < 8; i++) {
			x[i] = new Array(8);
		}
		this.boardSquares = x;
		this.initialize = initializeBoard;
		this.placePiece = placePiece;
		this.drawPieces = drawPiecesOnBoard;
	}

	function drawPiecesOnBoard() {
		for ( var i = 0; i < 8; i++) {
			for ( var j = 0; j < 8; j++) {
				var p = this.boardSquares[i][j].getPiece();
				if (p != null) {
					drawPiece(p.getImage(), i, j);
				}
			}
		}
	}

	function placePiece(piece, location) {
		this.boardSquares[location.getCol()][location.getRow()].setPiece(piece);
	}

	function initializeBoard() {
		for ( var i = 0; i < 8; i++) {
			for ( var j = 0; j < 8; j++) {
				this.boardSquares[j][i] = new boardSquare();
			}
		}
	}