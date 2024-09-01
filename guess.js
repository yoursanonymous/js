let max = parseInt(prompt("enter your maximum no."));// parsing int will acept the no. only
while (!max) {
    max = parseInt(prompt("please enter a valid no."))
}
const target = Math.floor(Math.random() * max) + 1;
let guess = prompt("let your first guess");
let count = 1;
while (target !== parseInt(guess)) {
    if (guess === 'q') {
        break;
    }
    guess = parseInt(guess);
    if (target > guess) {
        guess = prompt("too low. try again");
        count++;
    }
    else if (guess > target) {
        guess = prompt("too high. try again")
        count++;
    }
    else {
        guess = prompt("invalid guess");
    }
}
if (guess === 'q') {
    console.log("you quit, you loser")
}
else {
    console.log("you won fucker");
    console.log(`it took you ${count} guesses`);
}
