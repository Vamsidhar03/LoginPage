
var UserName = document.forms['form']['UserName'];
var MobileNumber = document.forms['form']['MobileNumber'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var user_error = document.getElementById('user_error');
var mobile_error = document.getElementById('mobile_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
UserName.addEventListener('textInput', user_Verify);
MobileNumber.addEventListener('textInput', mobile_Verify);


function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
	if (UserName.value.length < 6) {
		UserName.style.border = "1px solid red";
		user_error.style.display = "block";
		UserName.focus();
		return false;
	}
	if (MobileNumber.value.length < 9) {
		MobileNumber.style.border = "1px solid red";
		mobile_error.style.display = "block";
		MobileNumber.focus();
		return false;
	}

}
function user_Verify(){
	if (UserName.value.length >= 3) {
		UserName.style.border = "1px solid silver";
		user_error.style.display = "none";
		return true;
	}
}
function mobile_Verify(){
	if (MobileNumber.value.length == 10) {
		MobileNumber.style.border = "1px solid silver";
		mobile_error.style.display = "none";
		return true;
	}
}
function email_Verify(){
	if (email.value.length >= 12) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

