wantCapitals = true;
wantLowercase = true;
const passwordCapitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
const passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


const addCapitals = () => {
    let passwordCharacters = [];
    passwordCharacters.concat(passwordCapitals);
    return passwordCharacters;
}

console.log(addCapitals())

/*
const generatePasswordCharacters = () => {
    let passwordCharacters = [];
    if (wantCapitals = true) {
        passwordCharacters.concat(passwordCapitals);
        }
    if (wantLowercase = true) {
        passwordCharacters.concat(passwordLowercase);
    }
    return passwordCharacters;
}

const passwordCharacters = generatePasswordCharacters()
console.log(passwordCharacters) */