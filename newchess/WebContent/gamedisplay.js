	function updateImage(image, to, from) {
		var actualCanvas = $('#c')[0];
		var context = actualCanvas.getContext('2d');
		var oldX = to.getRow() * CELL_SIZE + .5;
		var oldY = to.getCol() * CELL_SIZE + .5;

		var newX = from.getRow() * CELL_SIZE + .5;
		var newY = from.getCol() * CELL_SIZE + .5;
		context.clearRect(oldY, oldX, CELL_SIZE, CELL_SIZE);
		context.clearRect(newY, newX, CELL_SIZE, CELL_SIZE);
		if (to.getRow() % 2 == 0) {
			if (to.getCol() % 2 == 1) {
				fillCell(to.getCol(), to.getRow());
			}
		} else {
			if (to.getCol() % 2 == 0) {
				fillCell(to.getCol(), to.getRow());
			}
		}

		if (from.getRow() % 2 == 0) {
			if (from.getCol() % 2 == 1) {
				fillCell(from.getCol(), from.getRow());
			}
		} else {
			if (from.getCol() % 2 == 0) {
				fillCell(from.getCol(), from.getRow());
			}
		}

		var x = from.getRow() * CELL_SIZE + .5;
		var y = from.getCol() * CELL_SIZE + .5;
		var can = $('#c')[0];
		var context = can.getContext('2d');
		context.drawImage(image, y, x);

	}
	
	function fillCell(row, col) {
		var x = row * CELL_SIZE + .5;
		var y = col * CELL_SIZE + .5;
		var can = $('#c')[0];
		var cntxt = can.getContext('2d');
		cntxt.fillStyle = "#58634D";
		cntxt.fillRect(x, y, CELL_SIZE, CELL_SIZE);
	}

	function drawPiece(image, row, col) {
		var x = row * CELL_SIZE + .5;
		var y = col * CELL_SIZE + .5;
		var can = $('#c')[0];
		var context = can.getContext('2d');
		image.onload = function() {
			context.drawImage(image, x, y);
		}
	}
	
	
	function drawSquares() {
		var c_can = $('#c');
		c_can.attr('width', BOARD_WIDTH);
		c_can.attr('height', BOARD_HEIGHT);
		var actualCanvas = $('#c')[0];
		var context = actualCanvas.getContext('2d');
		for ( var i = 0; i <= 8; i++) {
			var x = CELL_SIZE * i + .5;
			context.moveTo(x, 0);
			context.lineTo(x, BOARD_HEIGHT);
		}

		for ( var i = 0; i <= 8; i++) {
			var y = CELL_SIZE * i + .5;
			context.moveTo(0, y);
			context.lineTo(BOARD_WIDTH, y);
		}

		for ( var i = 0; i <= 8; i++) {
			for ( var j = 0; j <= 8; j++) {
				if (i % 2 == 0) {
					if (j % 2 == 1) {
						fillCell(i, j);
					}
				} else {
					if (j % 2 == 0) {
						fillCell(i, j);
					}
				}
			}
		}
		context.strokeStyle = "#000";
		context.stroke();
	}

	function drawBoard() {
		$('body').append('<canvas id="c">');
		drawSquares();
		var c_can = $('#c');
		c_can
				.bind(
						"click",
						function(e) {
							var x = Math.floor(e.pageX / 100);
							var y = Math.floor(e.pageY / 100);

							console.log('isSelected : ' + isSelected);

							if (!isSelected) {
								selectedLocation = new location(x, y);
								pieceOnSelectedLocation = getPieceFromLocation(selectedLocation);
								console
										.log(getPieceFromLocation(selectedLocation));
							} else {
								var endingDestination = new location(x, y);
								var m = new move(selectedLocation,
										endingDestination);
								console.log("FROM: "
										+ selectedLocation.getRow() + ","
										+ selectedLocation.getCol());
								console.log("TO: " + endingDestination.getRow()
										+ "," + endingDestination.getCol());
								makeMove(m);
							}

							isSelected = !isSelected;
						});
			}