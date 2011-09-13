//TODO: controller

function controller(historyAnalyzer, moveHistory){
	this.historyAnalyzer = historyAnalyzer;
	this.moveHistory = moveHistory;
	
	this.boardDisplay = null;
	this.whiteTeam = null;
	this.blackTeam = null;
	this.whitePlayer = null;
	this.blackPlayer = null;
	this.currentPlayer = null;
}