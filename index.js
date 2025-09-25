

// Simple demo of asynchronous code using a callback
// `func1` waits 3 seconds, logs, then calls the provided callback
function func1(callback){
  
  setTimeout(()=>{
    // After 3 seconds, log Task 1 and then run the callback
    console.log("Task 1");
    callback();
  },3000)
}
// `func2` is the callback: it logs two more tasks synchronously
function func2(){
  console.log("Task 2");
  console.log("Task 3");
}
// Kick off the flow: run func1 and pass func2 as its callback
func1(func2);