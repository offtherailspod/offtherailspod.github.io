function notifyUser(message) {
	if (message == "OK") { 
		alert("Message sent.");
		window.location.href = "/contact.html";
	} else { 
		alert("Error sending message.\n"+message);
	}
}

function sendMail() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	if (fname == "" || lname == "" || email == "" || subject == "" || message == "") {
		alert("Please complete the entire form. All elements are required.");
		return;
	}
	var body = fname+" "+lname+"\n"+email+"\n\n"+message+"\n";
	alert(body);
	Email.send({ SecureToken : "49c0bb81-2d92-4dd4-a2b5-df477fe315e0", To : 'matt.weidner@gmail.com', From : "offtherailswebmailer@gmail.com", Subject : subject, Body : body}).then( message => notifyUser(message));
}
