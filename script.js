const rps = ['Rock','Paper', 'Scissors'];
let playerScore = _short("PlayerScores").innerHTML =  0
let computerScore = _short("computerScores").innerHTML = 0

function _short(id) {
    return document.getElementById(id);
 }

 function computerSelection(){

    return rps[Math.floor(Math.random() * rps.length)];
}
 

_short('rock').addEventListener('click', playRoundRock,false)

function playRoundRock(){
    let computerChoice = computerSelection(rps)
    if (computerChoice === "Rock"){
        return _short("gameScore").innerHTML = "It's a tie. Both chose Rock!";
    }
    else if (computerChoice === "Scissors"){
        playerScore = _short("PlayerScores").innerHTML = ++playerScore;
        scoreUpdater()
        return _short("gameScore").innerHTML = "You win! Rock beats scissors!";
    }
    else if (computerChoice === "Paper"){
        computerScore = _short("computerScores").innerHTML = ++computerScore;
        scoreUpdater()
        return _short("gameScore").innerHTML = "You lose. Paper beats Rock.";
    }
    else{
        return _short("gameScore").innerHTML = computerSelection(rps);
    }
}

_short('paper').addEventListener('click', playRoundPaper,false)

function playRoundPaper(){
    let computerChoice = computerSelection(rps)
    if (computerChoice == "Rock"){
        playerScore = _short("PlayerScores").innerHTML = ++playerScore;
        scoreUpdater()
        return _short("gameScore").innerHTML = "You win! Paper beats Rock!";
    }
    else if (computerChoice === "Scissors"){
        computerScore = _short("computerScores").innerHTML = ++computerScore;
        scoreUpdater()
        return _short("gameScore").innerHTML = "You lose. Scissors beats Paper.";
    }
    else if (computerChoice === "Paper"){
        return _short("gameScore").innerHTML = "It's a tie. Both chose Paper.";
    }
}

_short('scissors').addEventListener('click', playRoundScissors,false)

function playRoundScissors(){
    let computerChoice = computerSelection(rps)
    if (computerChoice == "Rock"){
        computerScore = _short("computerScores").innerHTML = ++computerScore;
        scoreUpdater()
        return _short("gameScore").innerHTML = "You lose. Rock beats Scissors.";
    }
    else if (computerChoice === "Scissors"){
        return _short("gameScore").innerHTML = "It's a tie. Both Chose Scissors.";
    }
    else if (computerChoice === "Paper"){
        playerScore = _short("PlayerScores").innerHTML = ++playerScore;
        scoreUpdater()
        return _short("gameScore").innerHTML = "You win! Scissors beats Paper";
    }
}


function scoreUpdater(){
    if (playerScore > computerScore && playerScore == 5) {
        playerScore = _short("PlayerScores").innerHTML = 0;
        computerScore = _short("computerScores").innerHTML = 0;
        return _short("gamePlayer").innerHTML = "You won!!";
    }
    else if (playerScore < computerScore && computerScore == 5) {
        playerScore = _short("PlayerScores").innerHTML = 0;
        computerScore = _short("computerScores").innerHTML = 0;
        return _short("gameComputer").innerHTML = "Computer Won";
    }
    else {
        _short("gameComputer").innerHTML = "Computer:";
        _short("gamePlayer").innerHTML = "Player:";
    }
}

