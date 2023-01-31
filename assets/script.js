// Assignment code - select interactive elements from the DOM.
const passwordButton = document.querySelector("#generate");
const passwordDisplay = document.querySelector("#password");

const characterTypes = ["capital letters", "lowercase letters", "numeric characters", "special characters"];
const characterStrings = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", `!"#$%&'()*,-./:;<=>?@[]^_{}|~`];

// Query the user for desired password length.
const getLength = () => {
  let userInput = prompt("How many characters would you like? Please pick a number between 8 and 128.", "8");
  if (userInput >= 8 && userInput <= 128) {
    return userInput;
  } else {
    alert("Invalid Input. We will give you a default password of length 8.");
    return 8;
  }
};

// Query the user for desired character types.
const queryUser = () => {
  let responses = [];
  for (let i = 0; i < characterTypes.length; i++) {
    if (confirm(`Do you want to include ${characterTypes[i]}?`) === true) {
      responses.push(true);
    } else {
      responses.push(false);
    }
  }
  responses.push(getLength());
  return responses;
};

const generatePassword = () => {
  let responses = queryUser();
  let chosenCharacters = "";
  for (let i = 0; i < 4; i++) { // 4 because storing length in array at moment.
    if (responses[i] === true) {
      console.log(characterStrings[i]);
    chosenCharacters = chosenCharacters.concat(characterStrings[i]);
  };
}
console.log(chosenCharacters);
}

// Function to check at least one type of character is chosen. 
function checkSomethingChosen() {
}

// //Add all desired characters into a single string value.
// function selectCharacters() {
//   let addCaps = checkCapitals();
//   let chosenCharacters = "";
//   if (addCaps === true) {
//     const passwordCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     chosenCharacters = chosenCharacters.concat(passwordCapitals);
//   }
//   let addLower = checkLower();
//   if (addLower === true) {
//     const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
//     chosenCharacters = chosenCharacters.concat(passwordLowercase);
//   }
//   let addDigits = checkDigits();
//   if (addDigits === true) {
//     const passwordDigits = "0123456789";
//     chosenCharacters = chosenCharacters.concat(passwordDigits);
//   }
//   let addSpecials = checkSpecials();
//   if (addSpecials === true) {
//     const passwordSpecialCharacters = "!\"#$%&'()*,-./:;<=>?@[]^_`{}|~";
//     chosenCharacters = chosenCharacters.concat(passwordSpecialCharacters);
//   }
//   return chosenCharacters;
// }


// Randomize a password of chosenLength from character pool of selectCharacters;
// function generatePassword() {
//   let chosenCharacters = selectCharacters();
//   let chosenLength = chooseLength();
//   let totalCharOptions = chosenCharacters.length;
  
//   let password = "";
//   for (let passLength = 0; passLength < chosenLength; passLength++) {
//     let randNum = Math.random() * totalCharOptions;
//     let randChoice = Math.floor(randNum);
//     let newCharacter = chosenCharacters.substring(randChoice, randChoice + 1);
//     password = password.concat(newCharacter);
//   }
//   return password;
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// passwordButton.addEventListener("click", writePassword);
passwordButton.addEventListener("click", generatePassword);