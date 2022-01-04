/* Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

console.log("hello")

let passwordCharacters = [];
const passwordCapitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
const passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Doesn't contain the backslash ('\') character
const passwordSpecialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

let wantCapitals = ""
wantCapitals ? console.log("hi") : console.log("bye"); //add to passwordCharacters

let wantLowercase = ""
wantLowercase ? console.log("hi") : console.log("bye"); //add to passwordCharacters