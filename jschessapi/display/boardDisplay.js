var CELL_SIZE = 100;
var X_CELLS = 8;
var Y_CELLS = 8;
var BOARD_WIDTH = CELL_SIZE * Y_CELLS + 1;
var BOARD_HEIGHT = CELL_SIZE * X_CELLS + 1;

function drawBoard(){
	$('body').append('<canvas id="c">');
    var c_can = $('#c');
    c_can.attr('width', BOARD_WIDTH);
    c_can.attr('height',BOARD_HEIGHT);
    var actualCanvas = $('#c')[0];
    var context = actualCanvas.getContext('2d');
    for (var i = 0; i <= 8; i++) {
        var x = CELL_SIZE * i + .5;
        context.moveTo(x, 0);
        context.lineTo(x, BOARD_HEIGHT);
    }

    for (var i = 0; i <= 8; i++) {
        var y = CELL_SIZE * i + .5;
        context.moveTo(0, y);
        context.lineTo(BOARD_WIDTH, y);
    }

    for (var i = 0; i <= 8; i++){
    	for (var j = 0; j <= 8; j++){
    		if(i%2 == 0){
    			if(j%2 == 1){
    				fillCell(i,j);
    			}
    		} else {
    			if(j%2 == 0){
    				fillCell(i,j);
    			}
    		}	
    	}
    }
    context.strokeStyle = "#000";
    context.stroke();
}


function drawPieces(){
	
}

