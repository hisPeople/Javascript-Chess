function move(from,to){
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