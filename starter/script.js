// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
let passwordText = document.querySelector('#password');
let passwordLength
let passwordBase = [];
let randomCharacter = [];

// function to prompt user for desired password length
function getLength() {
  passwordBase = [];
  randomCharacter = []

  passwordLength = prompt("Pick a length between 10 and 64 characters");
  let passwordLengthValue = parseFloat(passwordLength);
  if (passwordLength >= 10 && passwordLength <= 64) {
    return passwordLengthValue;
  } else if (passwordLength < 10 || passwordLength > 64) {
    alert("You must pick a value between 10 and 64");
  }
  if (confirm("do you want to try again")) {
    return getLength();
  }
}


// Function to prompt user for password options
function getCharacterTypes() {


  if (confirm("Do you want lowercase characters?")) {
    passwordBase = passwordBase.concat(lowerCasedCharacters)
  };
  if (confirm("Do you want uppercase characters?")) {
    passwordBase = passwordBase.concat(upperCasedCharacters)
  };
  if (confirm("Do you want numbers?")) {
    passwordBase = passwordBase.concat(numericCharacters)
  };
  if (confirm("Do you want special characters")) {
    passwordBase = passwordBase.concat(specialCharacters)
  };

  if (passwordBase.length > 0) {

    return passwordBase;

  } else {
    (confirm("do you want to try again"))
    return getCharacterTypes()

  };

}

// Function for getting a random element from an array
function getRandom(passwordBase) {


  for (i = 1; i != passwordLength; i++) {
    randomCharacter.push(passwordBase[Math.floor(Math.random() * passwordBase.length)]);
  }
  return randomCharacter;
};

// Function to generate password with user input
function generatePassword() {

let password = ``
  getCharacterTypes();
  getRandom(passwordBase);
  password = randomCharacter.join("")
  return password;
}


// Write password to the #password input
function writePassword() {
  let password = ``
  password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getLength);
generateBtn.addEventListener('click', writePassword);