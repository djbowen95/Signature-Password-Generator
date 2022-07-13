# Password Generator
## 0A Introduction
Deployed link:
https://djbowen95.github.io/password-generator/

This project was built to test fundamental Javascript principles - and to build a randomized password generator which displays in the browser. While I was given the source code for the HTML and CSS, the majority of the Javascript is my own work.

I have split this READ ME file into two distinct sections - an outline of the code and how I built it; and a record of the tests I did on the code to make sure it was working as I built each element.

## 0B Contents
- OA Introduction
- OB Contents
- 01 Building the Project
- - 01A Generating Password Characters
- - 01B 
- 02 Testing the Project
- - 02A Generating Password Characters 

## 01 Building the Project
### 01A Generating Password Characters
I decided to begin by importing and storing a list of letters, digits and special characters in several variables - which I have named 'passwordCapitals', 'passwordLowercase', 'passwordDigits' and 'passwordSpecialCharacters' (see: lines !, !, !, and ! respectively).

I initially stored this values under an array (see second commit) but decided that it would be easier to return a string value if I worked with a string the entire time, so changed early into the project into using four strings to store all the available characters.

I wanted to allow the user to choose exactly which characters appeared in the password, so I created a function that would check if each character type was desired before adding it to the character pool (.script.js:! - !). This function contains four conditions which check if a corresponding variable is true, and if so, concatenate all characters of that type into an empty string. The function then returns a string containing all the characters that could be included in the password.

## 02 Testing the Project
I built all of my code in the main script.js file for this project. I was given five lines of code to start with - which were the code that linked my javascript file to the HTML.

I tried to immediately link all code I was building to the writePassword() function and generateBTN variable so that I could test how they would alter the HTML; I also added console.log lines so that I could find where errors in the code occured more easily. These were edited out at the end of the project. 

### 02A Generating Password Characters
I needed to make sure the selectCharacters() function was adding each set of characters to my chosenCharacters string. I decided the best way to do this was to test this in the console during each condition. 

This is what the test looked like in the code: 
(/development-images/rmex-02a-01.png)
It printed in the console as this: 
(/development-images/rmex-02a-02.png)

Checking each way/as each string was added to the full string meant I could check that every set was being added. I experimented with setting the values to false to make sure the string changed appropriately.

I also used the .length method to check character length for each section: 26 for each alphabet, 10 for digits, and 30 special characters. This is a method I planned on using later in the project - when randomly selecting from the final string - so it was useful to make note of how many of each character type I should expect there to be now.