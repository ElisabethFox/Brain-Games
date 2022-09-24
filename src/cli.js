import readlineSync from "readline-sync";

export const greetTheUserByName = () => {
  const name = readlineSync.question("May I have your name?");
  const greeting = `Hello, ${name}!`;

  return greeting;
};
