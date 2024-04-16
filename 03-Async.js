// ASYNC CODE

// SET TIMEOUT FUNCTION
console.log("Before the set timeout");

setTimeout(() => {
  console.log("Hello set timeout!");
}, 1000);

console.log("After the set timeout");

// SET INTERVAL
let counter = 0;
const myInterval = setInterval(() => {
  console.log("The counter is: ", counter);
  counter++;
  if (counter > 10) { // This condition needs to be checked on each second
    clearInterval(myInterval); 
  }
}, 1000);


/* 
This is not working because this part of the code is outside the interval. It's checking the condition only once
if (counter > 10) { 
  clearInterval(myInterval); 
} 
*/