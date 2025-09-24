function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
   const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
   const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers="0123456789";
   const symbols="!@#$%^&*()_+-=[]{}|;:,.<>?";
   let allowedCharacters="";
   let password="";
   if(includeLowerCase) allowedCharacters+=lowerCaseLetters;
   if(includeUpperCase) allowedCharacters+=upperCaseLetters;
   if(includeNumbers) allowedCharacters+=numbers;
   if(includeSymbols) allowedCharacters+=symbols;
   if(length<=0) return "Password length must be greater than 0";
   if(allowedCharacters.length===0) return "At least one character type must be selected";
    for(let i=0;i<length;i++){
      const randomIndex=Math.floor(Math.random()*allowedCharacters.length);
      password+=allowedCharacters[randomIndex];
    }
   return password;
  
}
const passwordLength = 12;
const includeLowerCase = false;
const includeUpperCase = true; 
const includeNumbers = true;
const includeSymbols = true;
const password = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);
console.log(`Generated Password: ${password}`);