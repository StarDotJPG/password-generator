// Assignment code here
var generateRandomCharacter = function (upper, lower, numeric, special) {

  // define the possible characters strings
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numericCharacters = "0123456789";
  var specialCharacters = "~`!@#$%^&*()_+-={}|[]\\:<>?,./;"

  // build the possibleCharacters string based on user-selected input
  var possibleCharacters = "";

  if (upper) {
    possibleCharacters = possibleCharacters + upperCharacters;
    console.log("Value of upper is: " + upper + ". Adding uppper case characters to list of possible characters...")
  }
  if (lower) {
    possibleCharacters = possibleCharacters + lowerCharacters;
    console.log("Value of lower is: " + lower + ". Adding lower case characters to list of possible characters...")
  }
  if (numeric) {
    possibleCharacters = possibleCharacters + numericCharacters;
    console.log("Value of numeric is: " + numeric + ". Adding numeric characters to list of possible characters...")
  }
  if (special) {
    possibleCharacters = possibleCharacters + specialCharacters;
    console.log("Value of special is " + special + ". Adding special characters to list of possible characters...")
  }

  // get a character from the possibleCharacters string at a random position
  var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  console.log("Generated a random character of: " + randomCharacter);

  return randomCharacter;
}

var promptUserForYesNo = function (questionText) {
  console.log("Asking user for input: " + questionText);
  var userInput = window.prompt(questionText);
  console.log("Got response from user: " + userInput);

  // make sure the user entered something
  while (userInput == null || userInput == "") {
    console.log("Blank or null entry detected, asking question again...");
    userInput = window.prompt("Please try again. " + questionText);
  }

  // once we have a valid string, convert it to lower case
  userInput = userInput.toLowerCase();

  // make sure our answer is a yes or a no
  while (userInput != "yes" && userInput != "no") {
    console.log("Answer '" + userInput + "' was not a yes or a no, asking question again...");
    userInput = window.prompt("Please try again. " + questionText);
  }

  // since we're sure the anwer is a yes or no, return true or false
  if (userInput == "yes") {
    console.log("Returning true");
    return true;
  } else if (userInput == "no") {
    console.log("Returning false");
    return false;
  }
}

var generatePassword = function () {
  var password = ""; // need to use an empty string to start with, otherwise we will return undefined as the first character   
  var prompt = "What is your desired password length? Password must be between 8 and 128 characters. Password length must be provided in whole numbers.";
  var length = parseFloat(window.prompt(prompt));

  // get desired password length and validate if the input is an integer and that it meets length requirements
  while (Number.isNaN(length) || !Number.isInteger(length) || length < 8 || length > 128) {
    console.log("Answer '" + length + "' is either not a number or does not meet length requirements, asking question again...");
    length = window.prompt("Please try again. " + prompt);
    length = parseFloat(length);
  }

  console.log("Generating a password of " + length + " characters...")

  // get desired password criteria and validate input
  var upper = promptUserForYesNo("Do you want uppercase characters? Answer Yes or No.");
  var lower = promptUserForYesNo("Do you want lowercase characters? Answer Yes or No.");
  var numeric = promptUserForYesNo("Do you want numeric characters? Answer Yes or No.");
  var special = promptUserForYesNo("Do you want special characters? Answer Yes or No.");

  // validate that the user picked at least one criteria
  while (!upper && !lower && !numeric && !special) {
    console.log("User did not pick at least one criteria. Asking again...");
    window.alert("You must choose at least one password criteria. Please try again.");
    var upper = promptUserForYesNo("Do you want uppercase characters? Answer Yes or No.");
    var lower = promptUserForYesNo("Do you want lowercase characters? Answer Yes or No.");
    var numeric = promptUserForYesNo("Do you want numeric characters? Answer Yes or No.");
    var special = promptUserForYesNo("Do you want special characters? Answer Yes or No.");
  }

  // call the generateRandomCharacter function as many times as the desired password length
  // password criteria is passed into generateRandomCharacter through boolean parameters
  for (i = 0; i < length; i++) {
    password = password + generateRandomCharacter(upper, lower, numeric, special);
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
