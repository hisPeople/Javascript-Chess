	function pieceDescription(pieceColor, hasMoved, pieceType){
		this.pieceColor = pieceColor;
		this.hasMoved = hasMoved;
		this.pieceType = pieceType;
	
		this.getPieceColor = getPieceColor;
		this.getHasMoved = getHasMoved;
		this.getPieceType = getPieceType;
	}

	function getPieceColor(){
		return this.pieceColor;
	}
	
	function getHasMoved(){
		return this.hasMoved;
	}
	
	function getPieceType(){
		return this.pieceType;
	}