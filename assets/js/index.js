function sendEmail() {
    var emailName = document.getElementById("getEmail").value;
	var myEmail = "hoangou01@gmail.com"
    Email.send({
	Host: "smtp.gmail.com",
	Username : myEmail.value,
	Password : "1951012031z",
	To : emailName.value,
	From : myEmail.value,
	Subject : "Hello my name is Pham Minh Hoang",
	Body : "Thanks for your visiting my portfolio",
	}).then(
		message => alert("mail sent successfully")
	);
}