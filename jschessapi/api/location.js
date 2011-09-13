function location(row,column){
	this.row = row;
	this.column = column;
	
	this.getRow = getRow;
	this.getColumn = getColumn;
}

function getRow(){
	return this.row;
}

function getColumn(){
	return this.column;
}