// Assignment Code
var generateBtn = document.querySelector("#generate");

let addCaps = true;
let addLower = true;
let addDigits = true;
let addSpecials = true;

//Add all desired characters into a single string value.  
function selectCharacters() {
  let chosenCharacters = "";
  if (addCaps === true) {
    const passwordCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chosenCharacters = chosenCharacters.concat(passwordCapitals);
    console.log(chosenCharacters);
  }
  if (addLower === true) {
    const passwordLowercase ="abcdefghijklmnopqrstuvwxyz";
    chosenCharacters = chosenCharacters.concat(passwordLowercase);
    console.log(chosenCharacters);
  }
  if (addDigits === true) {
    const passwordDigits = "0123456789";
    chosenCharacters = chosenCharacters.concat(passwordDigits);
    console.log(chosenCharacters);
  }
  if (addSpecials === true) {
    const passwordSpecialCharacters = "!\"#$%&'()*,-./:;<=>?@[]^_`{}|~";
    chosenCharacters = chosenCharacters.concat(passwordSpecialCharacters);
    console.log(chosenCharacters);
    console.log(passwordSpecialCharacters.length);
  }
  return chosenCharacters;
}

// Function to randomise password
function generatePassword() {
  return selectCharacters(); 
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