//  Calculator
const display = document.getElementById('display');
// appendToDisply function
function appendToDisply(input){
  display.value += input;
}
// calculate function
function calculate(input){
  // try to calculate the value
  try{
    display.value=eval(display.value);
  }catch(error){
    // if there is an error, display the error
    display.value = 'Error';
  }
}
// clearDisply function
function clearDisply(input){
  display.value = '';
}