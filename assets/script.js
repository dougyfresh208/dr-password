// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = parseInt(prompt("Enter the desired length for your password (between 8 and 128 characters):"));

  // Check if the entered length is valid
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length! Please enter a number between 8 and 128.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialCharacters = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("You must select at least one character type!");
    return "";
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  var availableChars = "";

  // Add selected character sets to the available characters
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }

  if (includeNumbers) {
    availableChars += numberChars;
  }

  if (includeSpecialCharacters) {
    availableChars += specialChars;
  }

  var password = "";

  // Generate the password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}