// Assignment Code

var lowerCaseChoice = "";
var upperCaseChoice = "";
var numericChoice = "";
var specialCharacterChoice = "";
var userPw = "";
// defines the generatePassword function
function generatePassword() {
    //lists all character types available in the password generator
    var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/",
     "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

    var selectedArray = []; 
    //defines userPwLength as the return of setPwLength
    var userPwLength = (setPwLength());

    //While loop to make sure the user selects at least one type of character while moving through the prompts
    promptChoices = 0
    while (promptChoices == 0) {
        lowerCaseChoice = window.prompt("Would you like to include lower case characters? (yes/no):");
        if (lowerCaseChoice == "yes") {
            selectedArray = selectedArray.concat(lowerCaseSet);
            promptChoices += 1;
        }

        upperCaseChoice = window.prompt("Would you like to include upper case characters? (yes/no):");
        if (upperCaseChoice == "yes") {
            selectedArray = selectedArray.concat(upperCaseSet);
            promptChoices += 1;
        }

        numericChoice = window.prompt("Would you like to include numeric characters? (yes/no):");
        if (numericChoice == "yes") {
            selectedArray = selectedArray.concat(numSet);
            promptChoices += 1;
        }

        specialCharacterChoice = window.prompt("Would you like to include special characters? (yes/no):");
        if (specialCharacterChoice == "yes") {
            selectedArray = selectedArray.concat(specialSet);
            promptChoices += 1;
        }
        //Creates an alert telling the user they have to choose atleast one character type if they did not choose any
        if (promptChoices == 0) {
            mustChoose = window.alert("You must choose atleast one type of character in your password by typing yes or no in the appropriate prompts.");
        }
    }
    //Adds randomly selected characters to the password with the criteria given to it by the user
    for (var i = 0; i < userPwLength; i++) {
        userPw += selectedArray[Math.floor(Math.random() * selectedArray.length)];
    }
return userPw;
}
    
//Defines the criteria of the password length with a min and max in a prompt
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