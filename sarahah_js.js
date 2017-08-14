function sendSarahah() {
	for (i = 0; i < 1000; i++) {	
		var temp = SendMessage.toString();
		temp = temp.replace("$('#Text').val()", "'#ProgrammerDa'")
		temp = temp.replace('window.location = "http://www.sarahah.com/messages/thankyou"', 'console.log("Success")');
		method = new Function(temp.substring(temp.indexOf('{') + 1, temp.lastIndexOf('}')));
		method();
	}
}

sendSarahah();