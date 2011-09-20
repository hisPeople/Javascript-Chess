	function location(row, col) {
		this.row = col;
		this.col = row;

		this.getRow = getRow;
		this.getCol = getCol;
	}

	function getRow() {
		return this.row;
	}

	function getCol() {
		return this.col;
	}