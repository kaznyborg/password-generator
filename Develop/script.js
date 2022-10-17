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

var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var Specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function getRandomInt(max) {
  return Math.ceil(Math.random() * max)
}

function generatePassword() {
  var allowedInputs = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"];
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)", "12");
  if(allowedInputs.includes(passwordLength)){
    var useUppercase = confirm("Would you like to include uppercase letters?");
    var useLowercase = confirm("Would you like to include lowercase letters?");
    var useNumbers = confirm("Would you like to include numbers?");
    var useSpecialCharaters = confirm("Would you like to include special characters?");
    var potentialCharacters = []
    if (useUppercase) {
      potentialCharacters = potentialCharacters.concat(Uppercase)
    }
  
    if (useLowercase) {
      potentialCharacters = potentialCharacters.concat(Lowercase)
    }
  
    if (useNumbers) {
      potentialCharacters = potentialCharacters.concat(Numbers)
    }
  
    if (useSpecialCharaters) {
      potentialCharacters = potentialCharacters.concat(Specialcharacters)
    }
  
    var password = ""
    for (var i = 0; i <passwordLength; i++) {
      password = password + potentialCharacters[getRandomInt(potentialCharacters.length)]
    }
  
      if (
        (useUppercase === true) ||
        (useLowercase === true) ||
        (useNumbers === true) ||
        (useSpecialCharaters === true) 
      ){
        return password;
      }else{
      alert("Choose at least one character type");
      }
  }else{
    alert("Enter valid length");
  }
  

 
}