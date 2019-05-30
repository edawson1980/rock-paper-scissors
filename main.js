//Rock Paper Scissors; Human vs. Computer

//define functions

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); //deal with case-sensitivity

  //if statement, with cheat code
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    return 'Please pick from the available options.'
  }
};
