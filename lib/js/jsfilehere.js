/*var day = new Date();
//new date makes current date.

var night = day.getHours();

if (night > 19 || night < 9) {
  // 7pm - 9am
  document.getElementById('body').className = "night";
	console.log("night - 7pm - 9am");

} else if (night > 16 && night < 20) {
	// 4pm - 8pm
	document.getElementById('body').className = "sunset";
	console.log("sunset - 4pm - 8pm");

} else { 
  // 9am - 4pm
  document.getElementById('body').className = "day";
	console.log("day | 9am - 4pm");
}*/

//home page js ends

function myForm(){
	event.preventDefault();
	console.log("myForm activated");
	//i made a function for my form on the contact page to validate weather of not the person has properly filled out the form section correctly.
	//each if statement is for each form section to see weather or not the form is true of false.
	var valid = true;
	
	if (document.getElementById("fname").value == "" || null){
	alert("Please enter your first name");
	valid = false;
	console.log("failed fname");
	}

	if (document.getElementById("lname").value == "" || null){
	alert("Please enter your last name");
	valid = false;
	console.log("failed lname");
	}

	if (document.getElementById("num").value == "" || null){
	alert("Please enter your phone number");
	valid = false;
	console.log("failed num");
	}

	if (document.getElementById("mail").value == "" || null){
	alert("Please enter your email");
	valid = false;
	console.log("failed mail");
	}

	if (document.getElementById("comment").value == "" || null){
	alert("Please enter your questions or comments");
	valid = false;
	console.log("failed comment");
	}
	
	return valid;

	console.log("form success");
}
  
myForm(); //called my function.
//form js ends

