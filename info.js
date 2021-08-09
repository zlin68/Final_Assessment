function dataValidation(){
				"use strict";
				let a= $("#firstName").val();
				let b = $("#lName").val();
				let c = $("#username").val();
				let d = $("#email").val();
				let e = $("#age").val();
				let f=document.getElementById("education").value;
				let g=document.signup.eStatus.value;
				let y= $("#password").val();
				let z=$("#passwordConf").val();
				if (a == "") {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="The First Name Field cannot be blank";
					document.forms["signup"]["firstName"].focus();
					return false;
					
				}
				if (a[0].toUpperCase() != a[0]) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Ensure that the First Name starts with a Capital letter";
					document.forms["signup"]["firstName"].focus();
					return false;
					
				}
				if (!/^[a-zA-Z]+$/.test(a)) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Ensure that the First Name contains only alphabet(no digits)";
					document.forms["signup"]["firstName"].focus();
					return false;
					
				}
				else if (b == ""||b[0].toUpperCase() != b[0]||!/^[a-zA-Z]+$/.test(b)) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Ensure that the Last Name starts with a Capital letter and contains only alphabet(no digits)";
					document.forms["signup"]["lastName"].focus();
					return false;
				}
				else if (c == ""||!/^[a-zA-Z]+$/.test(c[0])||c.length<6) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Ensure that the username starts with a letter, and it is at least 6 characters long";
					document.forms["signup"]["username"].focus();
					return false;
				}
				else if (d == ""||!/\S+@\S+\.\S+/.test(d)) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Provide a valid email address.";
					document.forms["signup"]["email"].focus();
					return false;
				}
				else if(e<18||e>60){
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Your age must be between 18 and 60";
					document.forms["signup"]["age"].focus();
					return false;
				}
				else if (f == "0") {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Select your Education Level";
					document.forms["signup"]["education"].focus();
					return false;
				}
				else if (g == "") {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Choose your Education Status";
					return false;
				}
				else if (y == "") {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Please enter a password";
					return false;
				}
				else if (z == "") {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Password Confirmation cannot be blank";
					return false;
				}
				
				else if (z) {
					var myInput = document.getElementById("password");
					var myInput1 = document.getElementById("passwordConf");
					var lowerCaseLetters = /[a-z]/g;
					var upperCaseLetters = /[A-Z]/g;
					var numbers = /[0-9]/g;
					  // Validate lowercase letters
					if (!/^[a-zA-Z]+$/.test(myInput.value[0])) {
						document.getElementById("errM").style.display = "inline-block";
						document.getElementById("errMp").innerHTML="The password must start with a small letter";
						document.forms["signup"]["password"].focus();
						return false;
					
					}
					else if(myInput.value.match(lowerCaseLetters)===null) {
						document.getElementById("errM").style.display = "inline-block";
						document.getElementById("errMp").innerHTML="Password does not meet the minimum requirements: lacks a lowercase";
						document.forms["signup"]["password"].focus();
						return false;
					  }

				  // Validate capital letters
				  
					else if(myInput.value.match(upperCaseLetters)===null) {
						document.getElementById("errM").style.display = "inline-block";
						document.getElementById("errMp").innerHTML="Password does not meet the minimum requirements: lacks an UPPERCASE";
						document.forms["signup"]["password"].focus();
						return false;
					  }

				  // Validate numbers
				  
					else if(myInput.value.match(numbers)===null) {
						document.getElementById("errM").style.display = "inline-block";
						document.getElementById("errMp").innerHTML="Password does not meet the minimum requirements: lacks a digit";
						document.forms["signup"]["password"].focus();
						return false;
					  }

				  // Validate length
				  else if(myInput.value.length <6) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Password length does not meet the minimum requirements: very short";
					document.forms["signup"]["password"].focus();
					return false;
				  }
				else if(myInput.value!=myInput1.value) {
					document.getElementById("errM").style.display = "inline-block";
					document.getElementById("errMp").innerHTML="Make sure your passwrds match.";
					document.forms["signup"]["passwordConf"].focus();
					return false;
				  }
				
				// send the data to the server
				else{
				return true;
			}
			}
		
		
		
		
	}
	
$(document).ready(function(){	
			//password validation
var myInput = document.getElementById("password");
var myInput1 = document.getElementById("passwordConf");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var mssg = document.getElementById("msg"); 

			// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
	document.getElementById("message").style.display = "inline-block";
	document.getElementById("errM").style.display = "none";
}

			// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
	document.getElementById("message").style.display = "none";
}

			// When the user starts to type something inside the password field
myInput.onkeyup = function() {
			  // Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value[0].match(lowerCaseLetters)) {  
	letter.classList.remove("invalid");
	letter.classList.add("valid");
} else {
	letter.classList.remove("valid");
	letter.classList.add("invalid");
}

			  // Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
	capital.classList.remove("invalid");
	capital.classList.add("valid");
} else {
	capital.classList.remove("valid");
	capital.classList.add("invalid");
}

			  // Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
	number.classList.remove("invalid");
	number.classList.add("valid");
} else {
	number.classList.remove("valid");
	number.classList.add("invalid");
}

			  // Validate length
if(myInput.value.length >= 6) {
	length.classList.remove("invalid");
	length.classList.add("valid");
} else {
	length.classList.remove("valid");
	length.classList.add("invalid");
}
}
			// When the user clicks on the CONFIRM password field, show the message box
myInput1.onfocus = function() {
	document.getElementById("message1").style.display = "inline-block";
	document.getElementById("errM").style.display = "none";
}

			// When the user clicks outside of the conf password field, hide the message box
myInput1.onblur = function() {
	 document.getElementById("message1").style.display = "none";
}

			// When the user starts to type something inside the conf password field
myInput1.onkeyup = function() {
if(myInput.value===myInput1.value) {  
	mssg.classList.remove("invalid");
	mssg.classList.add("valid");
} else {
	mssg.classList.remove("valid");
	mssg.classList.add("invalid");
}


}
});			