// Assignment code - select interactive elements from the DOM.
const passwordButton = document.querySelector("#generate");
const passwordDisplay = document.querySelector("#password");

const characterTypes = ["capital letters","lowercase letters", "numeric characters","special characters"];
const characterStrings = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", `!"#$%&'()*,-./:;<=>?@[]^_{}|~`];

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
      atLeastOne = true;
    } else {
      responses.push(false);
    }
  }

  // Check at least one character type is added, or add CAPs.
  if (responses[0] === false && responses[1] === false && responses[2] == false && responses [3] == false) {
  // if (responses === [false, false, false, false]) { Would be tidier, but doesn't work. Maybe needs to be Async? 
    responses[0] = true;
    alert("You must pick at least one character type. We have selected capitals for you.")
  }

  responses.push(getLength());
  return responses;
};

// Generate a randomised password based on the query responses. 
const generatePassword = () => { // Should make this into two functions.
  let responses = queryUser();
  
  // Create a string containing a pool of all the characters that user has requested.
  let characterPool = "";
  for (let i = 0; i < 4; i++) {
    // 4 because storing length in array at moment.
    if (responses[i] === true) {
      characterPool = characterPool.concat(characterStrings[i]);
    }
  }

  // Select random characters from the pool until generated password is desired length.
  let generatedPassword = "";
  for (let i =0; i < responses[4]; i++) {
    let randomNumber = Math.floor(Math.random() * characterPool.length);
    let randomLetter = characterPool.substring(randomNumber, (randomNumber + 1));
    generatedPassword = generatedPassword.concat(randomLetter);
  }

  return generatedPassword;
};

// Function to check at least one type of character is chosen.
function checkSomethingChosen() {}

// Run the generate password function, then write to the HTML container.
const displayNewPassword = () => {
  const password = generatePassword();
  passwordDisplay.value = password;
}

// Event listener for the 'generate password' button. 
passwordButton.addEventListener("click", displayNewPassword);