const userInput = prompt("Enter your name");
let GuessNum = prompt("Enter a number");
let minimum = 1;
let maximum = 2;
function random(max, min) {
return Math.floor(Math.random() *(max - min + 1) + min);
}
if (Number(GuessNum) !== random(maximum,minimum)){
console.log("Wrong Guess! Try Again")
}
while (Number (GuessNum) === random(maximum,minimum)){
  console.log('You guessed right! Move to stage 2')
  random(maximum++, minimum);
console.log(minimum++);
  GuessNum = prompt ("Enter a number");
if (Number (GuessNum) !== random(maximum++, minimum)){
console.log("Wrong Guess")

}
}