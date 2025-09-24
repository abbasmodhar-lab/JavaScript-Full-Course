function generatePassword(
   //  passing the args to the function
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
   //  defining the characters to be used in the password
   const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
   const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers="0123456789";
   const symbols="!@#$%^&*()_+-=[]{}|;:,.<>?";
   //  defining the allowed characters to be used in the password
   let allowedCharacters="";
   let password="";
   //  adding the characters to the allowed characters
   if(includeLowerCase) allowedCharacters+=lowerCaseLetters;
   if(includeUpperCase) allowedCharacters+=upperCaseLetters;
   if(includeNumbers) allowedCharacters+=numbers;
   if(includeSymbols) allowedCharacters+=symbols;
   //  checking if the length is greater than 0 and the allowed characters is not empty
   if(length<=0) return "Password length must be greater than 0";
   if(allowedCharacters.length===0) return "At least one character type must be selected";
   //  generating the password
    for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random()*allowedCharacters.length);
      //  adding the characters to the password
      password+=allowedCharacters[randomIndex];
    }
    //  returning the password
   return password;
  
}
const passwordLength = 12;
const includeLowerCase = false;
const includeUpperCase = true; 
const includeNumbers = true;
const includeSymbols = true;
//  passing the args to the function
const password = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);
//  printing the password
console.log(`Generated Password: ${password}`);