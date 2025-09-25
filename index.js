// get the box element
const myBox = document.getElementById("myBox");
// on click change the color and text
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH ! 😢";
});
//  on hover in change the text and color to yellow
myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "dont do it ! 😯";
});
// on hover out return the inistal style
myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = 'lightGreen';
  event.target.textContent = "Click Me 😊"; 
});
