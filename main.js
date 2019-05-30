//Rock Paper Scissors; Human vs. Computer

//define functions

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); //deal with case-sensitivity

  //if statement, with cheat code
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    return 'Please pick from the available options.';
  }
};

const getComputerChoice = () => {
  let randNum = Math.floor(Math.random()*3);
  if(randNum === 0){
    return 'rock';
  }else if(randNum === 1){
    return 'paper';
  }else {
    return 'scissors';
  }
};

//find Winner
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game is a tie!';
  }
};
