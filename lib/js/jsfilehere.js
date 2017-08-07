function changePic(){

var day = new Date();
//new date makes current date.

var night = day.getHours();

console.log('night',night);

if (night > 19 || night < 9) {
	//if the time is after seven at night or before nine in the morning; apply night picture to body.
	document.body.className = "night";

} else if (night > 16 && night < 20) {
	//if the time is between four at night and seven at night put the sunset picture to body.
	document.body.className = "sunset";	
} else { 
	document.body.className = "day";
	//so if none of the other things are true just put the day picture in the body.
}
}
changePic();
//home page js ends

function myForm(){
		//i made a function for my form on the contact page to validate weather of not the person has properly filled out the form section correctly.
		//each if statement is for each form section to see weather or not the form is true of false.
		var valid = true;
		
		if (document.forms["theform"][fname].value ==""){
		
		alert("Please enter your first name");
		valid = false;
		}
		if (document.forms["theform"][lname].value ==""){
		
		alert("Please enter your last name");
		valid = false;
		}
		if (document.forms["theform"][num].value ==""){
		
		alert("Please enter your phone number");
		valid = false;
		}
  	if (document.forms ["theform"][mail].value ==""){
		
		alert("Please enter your email");
		valid = false;
		}
    if (document.forms["theform"][comment].value ==""){
		
		alert("Please enter your questions or comments");
		valid = false;
		}
		
		return valid;
  
myForm(); //called my function.
//form js ends

