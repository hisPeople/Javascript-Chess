	function piece(color) {
		this.color = color;
		this.image = null;
		this.getImage = getImage;
		this.getcolor = getColor;
	}

	function getImage() {
		return this.image;
	}
	
	function getColor() {
		return this.color;
	}
	
	pawn.prototype = new piece();
	pawn.constructor = pawn;
	function pawn(color) {
		this.image = new Image();
		this.image.src = (color == "white") ? "images/WPawn.png"
				: "images/BPawn.png";
		/*this.getImage().addEventListener("click", junk, false);*/
	}

	king.prototype = new piece();
	king.constructor = king;
	function king(color) {
		this.image = new Image();
		this.image.src = (color == "white") ? "images/WKing.png"
				: "images/BKing.png";
	}

	rook.prototype = new piece();
	rook.constructor = rook;
	function rook(color) {
		this.image = new Image();
		this.image.src = (color == "white") ? "images/WRook.png"
				: "images/BRook.png";
	}

	bishop.prototype = new piece();
	bishop.constructor = bishop;
	function bishop(color) {
		this.image = new Image();
		this.image.src = (color == "white") ? "images/WBishop.png"
				: "images/BBishop.png";
	}

	knight.prototype = new piece();
	knight.constructor = knight;
	function knight(color) {
		this.image = new Image();
		this.image.src = (color == "white") ? "images/WKnight.png"
				: "images/BKnight.png";
	}

	queen.prototype = new piece();
	queen.constructor = new queen;
	function queen(color) {
		this.image = new Image();
		this.image.src = (color == "white") ? "images/WQueen.png"
				: "images/BQueen.png";
	}