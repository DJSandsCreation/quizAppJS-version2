/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correctAnswers = 0;

// 2. Store the rank of a player
let rank;


// 3. Select the <main> HTML element

const main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

let answerOne = prompt('What color is the red apple?');
let answerTwo = prompt('What color is the pink shirt?');
let answerThree = prompt('What color is the blue book?');
let answerFour = prompt('What is the orange bike?');
let answerFive = prompt('What is the purple car?');

// const answerOne = prompt('What color is the red apple?');
if (answerOne.toUpperCase() === 'RED') {
  correctAnswers += 1;
}
// const answerTwo = prompt('What color is the pink shirt?');
if (answerTwo.toUpperCase() === 'PINK') {
  correctAnswers += 1;
}
// const answerThree = prompt('What color is the blue book?');
if (answerThree.toUpperCase() === 'BLUE') {
  correctAnswers += 1;
}
// const answerFour = prompt('What is the orange bike?');
if (answerFour.toUpperCase() === 'ORANGE') {
  correctAnswers += 1;
}
// const answerFive = prompt('What is the purple car?');
if (answerFive.toUpperCase() === 'PURPLE') {
  correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers === 5) {
  rank = "Excellent Awesome-ness!! Gold Level !!";
} else if (correctAnswers >= 3) {
  rank = "Silver Level !! well done!!";
} else if (correctAnswers >= 1) {
  rank = "Bronze Level !! You did ok-ish !! ";
} else {
  rank = "Undefinded Level !! Dude, you kind of suck!! ";
}

// 6. Output results to the <main> element

main.innerHTML = `
  <h2>You got ${correctAnswers} out of 5.</h2>
  <p>You rank at: <strong>${rank}</strong>.</p>
`;