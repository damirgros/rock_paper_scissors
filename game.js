function getComputerChoice() {
    let computerChoice = Math.floor((Math.random()*3)+1);
    switch (computerChoice) {
        case 1:
            computerChoice = "rock"
            console.log("rock")
            break;
        case 2:
            computerChoice = "paper"
            console.log("paper")
            break;
        case 3:
            computerChoice = "scissors"
            console.log("scissors")
            break;
    }
    return computerChoice
}


function getHumanChoice(humanChoice) {
    humanChoice = prompt("Choose : rock, paper or scissors!")
    console.log(humanChoice);
    return humanChoice
}


function playGame(){

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;


    function playRound(humanChoice, computerChoice){
       
        if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
            console.log("It is a draw!")  
            }  
        else if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            console.log("You win!")           
            }
        else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            console.log("You win!")           
            }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            console.log("You win!")           
            }
        else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            console.log("You lose!")            
            }
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            console.log("You lose!")           
            }
        else if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            console.log("You lose!")
            }
        else {
            console.log("Something went wrong! :(")           
            } 
}

   for (let i = 0; i < 5; i++){
        roundCount++;
        console.log("Round" + " " + roundCount);
        playRound(getHumanChoice(), getComputerChoice()); 
        console.log(humanScore);
        console.log(computerScore);
        if (roundCount === 5 && humanScore > computerScore) {
            console.log("You are the winnner of the game!")
        }
        else if (roundCount === 5 && humanScore < computerScore){
                console.log("You lost the game! :(")
            }
        else if (roundCount === 5 && humanScore === computerScore){
                console.log("The game is drawn!")
            }
    }   

}

playGame();