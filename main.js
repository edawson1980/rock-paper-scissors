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
  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'Human wins!';
    }else{
      return 'Computer Wins!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'Human wins!';
    }else{
      return 'Computer Wins!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'Human wins!';
    }else{
      return 'Computer Wins!';
    }
  }
  if(userChoice === 'bomb'){
    return 'Human Wins!';
  }
};
