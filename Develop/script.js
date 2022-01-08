// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //character variables
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var special = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "\\",
    "^",
    "_",
    "{",
    "}",
    "|",
    "~",
  ];
  var alphabetUppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var storage = [];
  var result = "";

  //prompts for password criteria
  var askLength = prompt(
    "Please choose a length of password between 8 and 128 characters"
  );

  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include capital letters?");
  var numeric = confirm("Do you to include want numbers?");
  var specialCharacter = confirm("Do you want to include special characters?");

  //get password length
  function getLength(x) {
    if (x >= 8 && x <= 128) {
      return x;
    } else {
      alert("Length of password is required! Please try again");
      return null;
    }
  }

  var passwordLength = parseInt(getLength(askLength));

  if (lowercase) {
    storage = storage.concat(alphabet);
  }

  if (specialCharacter) {
    storage = storage.concat(special);
  }

  if (uppercase) {
    storage = storage.concat(alphabetUppercase);
  }

  if (numeric) {
    storage = storage.concat(number);
  }

  //generate random password
  for (var i = 0; i <= passwordLength; i++) {
    result = result + storage[Math.floor(Math.random() * storage.length)];
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
