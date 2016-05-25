function semail() {
	var userEmail = document.getElementById("email").value;
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	    if (req.readyState == 4 && req.status == 200) {
		    alert("You email has been saved.          It was " + userEmail);
		}
	}
	req.open("GET", "", true);
	req.send();
}
