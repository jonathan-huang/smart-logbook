function semail() {
	var userEmail = document.getElementById("email").value;
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	    if (req.readyState == 4 && req.status == 200) {
		    if (userEmail.indexOf("@") > 1 && userEmail.indexOf(".") > 3 && userEmail.length > 6) {
		    	alert("You email has been saved.          It was " + userEmail);
		    }else {
		    	alert(userEmail + " is invalid.")
		    }
		}
	}
	req.open("GET", "", true);
	req.send();
}
