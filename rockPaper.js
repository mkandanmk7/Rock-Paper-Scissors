let yourScore = 0;
let computerScore = 0;
const whoWins = document.querySelector("#winner");
const score = document.querySelector("#score");
function startGame(start) {
  let yourChoice = start;
  let threeChoices = ["rock", "paper", "scissors"]; //three options for computer
  let computerChoice = threeChoices[Math.floor(Math.random() * 3)]; //get the random choice for computer .
  let winner = compare(yourChoice, computerChoice); //comparision;
  whoWins.classList = ""; //empty the winners class list.

  if (winner == "You") {
    whoWins.innerHTML = winner + " Wins";
    whoWins.classList.add("win"); //adding to the class list;
  } else if (winner == "Computer") {
    whoWins.innerHTML = winner + " Wins";
    whoWins.classList.add("lose"); //lose
  } else {
    whoWins.innerHTML = winner; //print to the choose Your move
    whoWins.classList.add("tie"); //tie
  }

  score.innerHTML = `<span class="sides">User : ${yourScore}</span>
    <span class="sides">Computer : ${computerScore}</span>   
    `; //showing scores yours and computer's.
}

//comparision choice;

function compare(yourChoice, computerChoice) {
  if (yourChoice === computerChoice) {
    //both choices are same then tie
    return "Its a tie!";
  } else if (yourChoice === "rock") {
    if (computerChoice === "scissors") {
      yourScore++;
      return "You";
    } else if (computerChoice === "paper") {
      computerScore++;
      return "Computer";
    }
  } else if (yourChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "Computer";
    } else if (computerChoice === "rock") {
      yourScore++;
      return "You";
    }
  } else if (yourChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "Computer";
    } else if (computerChoice === "paper") {
      yourScore++;
      return "You";
    }
  }
}
