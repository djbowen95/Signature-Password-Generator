// Assignment code - select interactive elements from the DOM.
const passwordButton = document.querySelector("#generate");
const passwordDisplay = document.querySelector("#password");

const characterTypes = [
  "capital letters",
  "lowercase letters",
  "numeric characters",
  "special characters",
];
const characterStrings = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  `!"#$%&'()*,-./:;<=>?@[]^_{}|~`,
];

// Query the user for desired password length.
const getLength = () => {
  let userInput = prompt(
    "How many characters would you like? Please pick a number between 8 and 128.",
    "8"
  );
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
  let generatedPassword = "";

  for (let i = 0; i < 4; i++) {
    // 4 because storing length in array at moment.
    if (responses[i] === true) {
      chosenCharacters = chosenCharacters.concat(characterStrings[i]);
    }
  }

  for (let i =0; i < responses[4]; i++) {
    let randomNumber = Math.floor(Math.random() * chosenCharacters.length);
    let randomLetter = chosenCharacters.substring(randomNumber, (randomNumber + 1));
    generatedPassword = generatedPassword.concat(randomLetter);
  }

  console.log(generatedPassword);
  return generatedPassword;
};

// Function to check at least one type of character is chosen.
function checkSomethingChosen() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// passwordButton.addEventListener("click", writePassword);
passwordButton.addEventListener("click", generatePassword);
