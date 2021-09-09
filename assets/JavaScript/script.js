var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment code here
var generatePassword = function() {
var passwordCharacters = parseInt(prompt("Please select a password between 8 and 128 characters"));
if (passwordCharacters > 8 && passwordCharacters < 128) {
}
else {
  return alert("Please select a length between the valid character amount.");
}

var useUpper = confirm("Would you like Upper Case characters in your password?");
if (useUpper) {
  selectedPrompts = selectedPrompts.concat(upperCaseCharacters);
}

var useLower = confirm("Would you like Lower Case characters in your password?");
if (useLower) {
  selectedPrompts = selectedPrompts.concat(lowerCaseCharacters);
}

var useSpecial = confirm("Would you like special characters in your password?");
if (useSpecial) {
  selectedPrompts = selectedPrompts.concat(specialCharacters);
}

var useNumbers = confirm("Would you like numbers in your password?");
if (useNumbers) {
  selectedPrompts = selectedPrompts.concat(numericCharacters);
}

if (!useSpecial && !useNumbers && !useLower && !useUpper) {
  return null;
}


for (i = 0; i < passwordCharacters; i++) {
  //debugger;
  newPassword[i] = selectedPrompts[Math.floor(Math.random() * passwordCharacters)];
}
  
return newPassword.join("");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var newPassword = [];

var selectedPrompts = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
