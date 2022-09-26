import readlineSync from "readline-sync";

export const getTheUserName = () => {
  const userName = readlineSync.question("May I have your name? ");
  return userName;
};
