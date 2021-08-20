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

  if (winner == "User") {
    whoWins.innerHTML = winner + "wins";
    whoWins.classList.add("win"); //adding to the class list;
  } else if (winner == "Computer") {
    whoWins.innerHTML = winner + "wins";
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

function compare(choice1, choice2) {
  if (choice1 === choice2) {
    return "Its a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      yourScore++;
      return "User";
    } else if (choice2 === "paper") {
      computerScore++;
      return "Computer";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "scissors") {
      computerScore++;
      return "Computer";
    } else if (choice2 === "rock") {
      yourScore++;
      return "User";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      computerScore++;
      return "Computer";
    } else if (choice2 === "paper") {
      yourScore++;
      return "User";
    }
  }
}
