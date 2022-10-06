import readlineSync from 'readline-sync';

const playTheGame = (task, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playTheGame;
