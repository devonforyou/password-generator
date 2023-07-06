// Assignment code here


function generatePassword() {
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var numericChars = '0123456789';

  var passwordLength = parseInt(prompt('How long would you like your password between 8 and 128 characters.'));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('It has to be atleast 8 characters. Try again.');
    return '';
  }

  var includeLowercase = confirm('Include lowercase characters?');
  var includeUppercase = confirm('How about uppercase characters?');
  var includeSpecialChars = confirm('And special characters?');
  var includeNumbers = confirm('Numbers?');

  let charSet = '';
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeSpecialChars) {
    charSet += specialChars;
  }
  if (includeNumbers) {
    charSet += numericChars;
  }

  if (charSet === '') {
    alert('You must include at least one character type in the password.');
    return '';
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

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
