// Assignment code here
var generateRandomCharacter = function(returnUpper, returnLower, returnNumeric, returnSpecial) {

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "~`!@#$%^&*()_+-={}|[]\\:<>?,./;"

  // build the possibleCharacters string based on user-selected input
  var possibleCharacters = upper + lower + numeric + special;

  // get a character from the possibleCharacters string at a random position
  var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));

  console.log("Generated a random character of: " + randomCharacter);

  return randomCharacter;
}

var generatePassword = function() {
  var password = ""; // need to use an empty string to start with, otherwise we will return undefined as the first character
  
  // TODO: add input validation on character length and character types
  var length = window.prompt("What is your desired password length? Password must be between 8 and 128 characters.");
  length = parseInt(length);
  console.log("Generating a password of " + length + " characters...")

  var upper = window.prompt("Do you want uppercase characters?");
  var lower = window.prompt("Do you want lowercase characters?");
  var numeric = window.prompt("Do you want numeric characters?");
  var special = window.prompt("Do you want special characters?");

  // call the generateRandomCharacter function mulitple times and generate the password
  // password criteria is passed into generateRandomCharacter through boolean parameters
  for (i = 0; i < length; i++) {
    password = password + generateRandomCharacter(true, true, true, true);
  }

  console.log("Generated a passowrd: " + password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
