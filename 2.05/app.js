console.log("2.05 running");
let daysUntilChristmas = getDaysUntilChristmas();

let countdown = document.getElementById('countdown');
countdown.innerHTML += daysUntilChristmas;


function getDaysUntilChristmas(){
	var now = new Date();
	var thisYear = now.getFullYear();
	var Xmas = "December 24, " + thisYear;
	var nextXmas = new Date(Xmas);

	// Number of milliseconds per day
	var msPerDay = 24 * 60 * 60 * 1000 ;  
	var daysLeft = (nextXmas.getTime() - now.getTime()) / msPerDay;
	daysLeft = Math.round(daysLeft);
	return daysLeft;
}

// The background will only become green in december, until then it is light grey

if (daysUntilChristmas > 24) {
	document.body.style.backgroundColor = "lightgrey";
}
