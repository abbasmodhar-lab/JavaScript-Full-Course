function updateClock() {
   //  getting the current time
  const now = new Date();
  const hours = now.getHours();
  //  getting the current ampm
  const ampm = hours >= 12 ? "PM" : "AM";
  //  getting the current hours in 12 hour format
  const hours12 = hours % 12 || 12;
  //  getting the current minutes
  const minutes = now.getMinutes();
  //  getting the current seconds
  const seconds = now.getSeconds();
  //  formatting the time string
  const timeString = `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  document.getElementById("clock").textContent = timeString;
}
//  updating the clock initially
updateClock();
//  updating the clock every second
setInterval(updateClock,1000);
