// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create / store the user's input for character selection. 
// If all 'false' then must give 'error' message.
let addCaps = true;
let addLower = true;
let addDigits = true;
let addSpecials = true;

// Create / store the users input for chosen length.
// Must be more than 8 and less than 128. 
let chosenLength = 12;

//Add all desired characters into a single string value.
function selectCharacters() {
  let chosenCharacters = "";
  if (addCaps === true) {
    const passwordCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chosenCharacters = chosenCharacters.concat(passwordCapitals);
  }
  if (addLower === true) {
    const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
    chosenCharacters = chosenCharacters.concat(passwordLowercase);
  }
  if (addDigits === true) {
    const passwordDigits = "0123456789";
    chosenCharacters = chosenCharacters.concat(passwordDigits);
  }
  if (addSpecials === true) {
    const passwordSpecialCharacters = "!\"#$%&'()*,-./:;<=>?@[]^_`{}|~";
    chosenCharacters = chosenCharacters.concat(passwordSpecialCharacters);
  }
  return chosenCharacters;
}

// Randomize a password of chosenLength from character pool of selectCharacters;
function generatePassword() {
  let chosenCharacters = selectCharacters();
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

/*
Function that when clicked ->
  Runs the function writePassword


/*
let passwordCharacters = [];
const passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Doesn't contain the backslash ('\') character
const passwordSpecialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    const passwordCapitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];

let wantCapitals = ""
wantCapitals ? console.log("hi") : console.log("bye"); //add to passwordCharacters

let wantLowercase = ""
wantLowercase ? console.log("hi") : console.log("bye"); //add to passwordCharacters */
