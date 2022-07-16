// Assignment Code
var generateBtn = document.querySelector("#generate"); // DONE

// Alert/confirmation boxes - check if they want each type of character.
// Could probably do this in one function, and save the results as an array. 
function checkCapitals() {
  if (confirm("Do you want to include capital letters?") == true) {
    return true;
  } else {return false}
};

function checkLower() {
  if (confirm("Do you want to include lowercase letters?") == true) {
    return true;
  } else {return false}
}

function checkDigits() {
  if (confirm("Do you want to include numbers?") == true) {
    return true;
  } else {return false}
}

function checkSpecials() {
  if (confirm("Do you want to include special characters?") == true) {
    return true;
  } else {return false}
}

// Function to check at least one type of character is chosen. 
function checkSomethingChosen() {
}

//Add all desired characters into a single string value.
function selectCharacters() {
  let addCaps = checkCapitals();
  let chosenCharacters = "";
  if (addCaps === true) {
    const passwordCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chosenCharacters = chosenCharacters.concat(passwordCapitals);
  }
  let addLower = checkLower();
  if (addLower === true) {
    const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
    chosenCharacters = chosenCharacters.concat(passwordLowercase);
  }
  let addDigits = checkDigits();
  if (addDigits === true) {
    const passwordDigits = "0123456789";
    chosenCharacters = chosenCharacters.concat(passwordDigits);
  }
  let addSpecials = checkSpecials();
  if (addSpecials === true) {
    const passwordSpecialCharacters = "!\"#$%&'()*,-./:;<=>?@[]^_`{}|~";
    chosenCharacters = chosenCharacters.concat(passwordSpecialCharacters);
  }
  return chosenCharacters;
}

// Create / store the users input for chosen length.
// Must be more than 8 and less than 128. 
function chooseLength() {
  let userInput = prompt("How many characters would you like? Please pick a number between 8 and 128.", "8");
  if (userInput >= 8 && userInput <= 128) {
    return userInput;
  } else {
    alert("Invalid Input. We will give you a default password of length 8.");
    return 8;
  }
}

// Randomize a password of chosenLength from character pool of selectCharacters;
function generatePassword() {
  let chosenCharacters = selectCharacters();
  let chosenLength = chooseLength();
  let totalCharOptions = chosenCharacters.length;
  
  let password = "";
  for (let passLength = 0; passLength < chosenLength; passLength++) {
    let randNum = Math.random() * totalCharOptions;
    let randChoice = Math.floor(randNum);
    let newCharacter = chosenCharacters.substring(randChoice, randChoice + 1);
    password = password.concat(newCharacter);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);