 
function myFunction() {
	var time = new Date().getHours();
  
	if (time <= 12) {                                               
	document.getElementById("time").innerHTML= "Good morning";     
	}
	else if (time <= 18) {
	document.getElementById("time").innerHTML="Good afternoon";		
	}
	else {
	document.getElementById("time").innerHTML="Good evening";		
	}

}
 myFunction();	
