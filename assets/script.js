function generatePassword() {
    //Declared variables and an empty array to hold what they choose.
    var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
    var selectedArray = [];

    var passwordLength = getPasswordLength();

    var charTypeSelected = false;
    //loop makes sure the user selects at least one
    while (charTypeSelected == false) {
        var lowerCase = getChoice("lowercase");
        var upperCase = getChoice("uppercase");
        var numericCharacters = getChoice("numeric");
        var specialCharacters = getChoice("special");
        if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
            charTypeSelected = true;
        } else {
            window.alert("You must select at least one character type.")
        }
    }

    //Puts user's choices into the array I created.
    if (lowerCase) {
        selectedArray = selectedArray.concat(lowerCaseLetters);
    }
    if (upperCase) {
        selectedArray = selectedArray.concat(upperCaseLetters);
    }
    if (numericCharacters) {
        selectedArray = selectedArray.concat(numbers);
    }
    if (specialCharacters) {
        selectedArray = selectedArray.concat(specialSet);
    }

    var passwordString = "";
    //Generates a password from the array I made. Randomly selects characters based on whats in the array.
    for (var i = 0; i < passwordLength; i++) {
        passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
    }

    return passwordString;
}

function getPasswordLength() {
    var userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
        userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));

        // Checking here to make sure the user entered a number and not a letter.
        if (isNaN(userChoice)) {
            // This will reset the choice value to 0 so it can restart the loop if the user entered anything besides a number.
            userChoice = 0;
        }
    }

    return userChoice;
}

// Created this function as the user choice options are repetitive and this simplifies the code needed.
function getChoice(currentOption) {
    var userChoice = "a",
        messagePrompt = "";
    var messagePrompt = ('Would you like '.concat(currentOption));
    messagePrompt = messagePrompt.concat(' characters (y/n)?');
    // This loop ensures the user enters a valid response.
    while (userChoice = "a") {
        userChoice = (window.prompt(messagePrompt));
        if (userChoice == "y") {
            return true;
        } else if (userChoice == "n") {
            return false;
        }
    }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
