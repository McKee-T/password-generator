// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 var lowerCase = confirm("Would you like lowercase letters?\nOK for Yes, Cancel for No.");
 var upperCase = confirm("Would you like uppercase letters?\nOK for Yes, Cancel for No.");
 var numberCharacters = confirm("Would you like numbers?\nOK for Yes, Cancel for No.");
 var specialCharacters = confirm("Would you like special characters?\nOK for Yes, Cancel for No.");

//  if(lowerCase) {
//   let lowerCasePrompt = 
//  } 
  while (true){

    let lengthPrompt = prompt ("How long would you like your password to be?");
    let passwordLength = parseInt(lengthPrompt);

    if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128){
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "1234567890";
      const specialChars = "!@#$%^&*-_=+<>?/";
    
      let allowedChars = "";
      let password = "";
    
      if (lowerCase) {
        allowedChars += lowercaseChars;
      }
      if (upperCase) {
        allowedChars += uppercaseChars;
      }
      if (numberCharacters) {
        allowedChars += numberChars;
      }
      if (specialCharacters) {
        allowedChars += specialChars;
      }
    
      for(let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
      }
    return password;
    } else {
      alert("Invalid input. Please input a number between 8 and 128.");

    }
  

  }
 
}
// prompt to get the number of characters in password
// need 4 ifs with 4 confirmExpressionconditionals
// processing...
// return password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
