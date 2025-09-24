//  getting the display element
const display = document.getElementById("display");
//  initializing the timer variable
let timer = null;
//  initializing the start time
let startTime = 0;
//  initializing the elapsed time
let elapsedTime = 0;
//  initializing the isRunning variable
let isRunning = false;
//  starting the timer
function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
     timer = setInterval(update, 10);
    isRunning = true;
    console.log("Timer started");
  }
}
//  stopping the timer
function stopTimer() {
   if(isRunning){
    clearInterval(timer);
    elapsedTime=Date.now()-startTime ;
    isRunning=false;
    console.log("Timer stopped");
   }
}
//  resetting the timer
function resetTimer() {
   clearInterval(timer);
 startTime=0;
   elapsedTime=0;
 isRunning=false;
 display.textContent="00:00:00:00";
    

}
//  updating the display
function update() {
   //  getting the current time
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  //  getting the current minutes
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  //  getting the current seconds
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  //  getting the current milliseconds
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  //  updating the display
  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
    .toString()
    .padStart(2, "0")}`;
}
