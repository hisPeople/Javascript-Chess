function adjustment(row, column){
	this.row = row;
	this.column = column;
	
	this.getLocation = getLocation;
}

function getLocation(location){
	var adjustedLocation = new location(location.getRow()+this.row,location.getColumn()+this.column);
	return adjustedLocation;
}