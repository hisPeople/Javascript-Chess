	function move(to,from){
		this.from = from;
		this.to = to;
		
		this.getFrom = getFrom;
		this.getTo = getTo;
	}

	function getFrom(){
		return this.from;
	}

	function getTo(){
		return this.to;
	}
	
	extendedMove.prototype = new move();
	extendedMove.constructor = extendedMove;
	function extendedMove(from, to){
		this.promotionPiece = null;
		this.getPromotionPiece = getPromotionPiece;
		this.setPromotionPiece = setPromotionPiece;
	}
	
	function getPromotionPiece(){
		return this.promoPiece;
	}
	
	function setPromotionPiece(piece){
		this.promotionPiece = piece;
	}