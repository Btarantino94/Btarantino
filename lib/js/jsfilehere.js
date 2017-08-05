var day = new Date();
//new date makes current date.

var night = day.getHours();

console.log('night',night);

if (night > 19 || night < 9) {
	//if the time is after seven at night or before six in the morning; apply night picture to body.
	document.body.className = "night";

} else if (night > 16 && night < 20) {
	//if the time is between four at night and seven at night put the sunset picture to body.
	document.body.className = "sunset";	
} else { 
	document.body.className = "day";
	//so if none of the other things are true just put the day picture in the body.
}