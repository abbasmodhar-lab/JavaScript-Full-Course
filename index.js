 let count=0;
 document.getElementById("increment").onclick = function(){
    count++;
    document.getElementById("number").textContent=count;
 }
 document.getElementById("decrement").onclick = function(){
    count--;
    document.getElementById("number").textContent=count;
 }
 document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("number").textContent=count;
 }