	function gameState() {
		pawnMovedTwoLocation = null;
		var movingTeamColor = null;
		var x = new Array(8);
		for ( var i = 0; i < 8; i++) {
			x[i] = new Array(8);
		}
		var pieceDescriptions = x;
		
		this.getPieceDescription = getPieceDescription;
		this.setPieceDescription = setPieceDescription;
		this.getMovingTeamColor = getMovingTeamColor;
		this.setMovingTeamColor = setMovingTeamColor;
		this.getPawnMovedTwoLocation = getPawnMovedTwoLocation;
		this.setPawnMovedTwoLocation = setPawnMovedTwoLocation;
	}
	
	function getPawnMovedTwoLocation(){
		return this.pawnMovedTwoLocation;
	}

	function setPawnMovedTwoLocation(location){
		this.pawnMovedTwoLocation = location;
	}

	function getMovingTeamColor(){
		return this.movingTeamColor;
	}

	function setMovingTeamColor(color){
		this.movingTeamColor = color;
	}

	function getPieceDescription(location){
		return this.pieceDescriptions[location.getRow()][location.getColumn()];
	}

	function setPieceDescription(location, pieceDescription){
		this.pieceDescriptions[location.getRow()][location.getColumn()] = pieceDescription;
	}
