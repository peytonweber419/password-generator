// Assignment Code

var lowerCaseChoice = "";
var upperCaseChoice = "";
var numericChoice = "";
var specialCharacterChoice = "";
var userPw = "";

function generatePassword() {
    var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/",
     "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

    var selectedArray = []; 

    var userPwLength = (setPwLength());

    lowerCaseChoice = window.prompt("Would you like to include lower case characters? (yes/no):");
    if (lowerCaseChoice == "yes") {
        selectedArray = selectedArray.concat(lowerCaseSet);
    }

    upperCaseChoice = window.prompt("Would you like to include upper case characters? (yes/no):");
    if (upperCaseChoice == "yes") {
        selectedArray = selectedArray.concat(upperCaseSet);
    }

    numericChoice = window.prompt("Would you like to include numeric characters? (yes/no):");
    if (numericChoice == "yes") {
        selectedArray = selectedArray.concat(numSet);
    }

    specialCharacterChoice = window.prompt("Would you like to include special characters? (yes/no):");
    if (specialCharacterChoice == "yes") {
        selectedArray = selectedArray.concat(specialSet);
    }
    
    for (var i = 0; i < userPwLength; i++) {
        userPw += selectedArray[Math.floor(Math.random() * selectedArray.length)];
    }
    return userPw;
}


function setPwLength() {
    var PwLength = 0;
    while ((PwLength < 8) || (PwLength > 128)) {
        PwLength = window.prompt("How long would you like your password to be? (Must be between 8 and 128):");
    }
    return PwLength;
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);