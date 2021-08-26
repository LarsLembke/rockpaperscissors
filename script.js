let userChoice = "";
let codeChoice = "";
let winner = "";

const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissor = document.querySelector(".scissors");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMLoaded");

    playerChoice();
});

function playerChoice() {
    console.log("playerChoice");

    userRock.addEventListener("click", function() {
        userChoice = "rock";
        computerChoice();
    });
    userPaper.addEventListener("click", function() {
        userChoice = "paper";
        computerChoice();
    });
    userScissor.addEventListener("click", function() {
        userChoice = "scissor";
        computerChoice();
    });


}

function computerChoice() {
    console.log("computerChoice");

    document.querySelector("#player1").classList = "player";
    document.querySelector("#player2").classList = "player";

    codeChoice = Math.round(Math.random() * 2);

    console.log(userChoice);
    console.log(codeChoice);

    runAnimations();
}

function runAnimations() {
    console.log("runAnimations");

    document.querySelector("#draw").classList = "hidden";
    document.querySelector("#win").classList = "hidden";
    document.querySelector("#lose").classList = "hidden";

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    document.querySelector("#player1").addEventListener("animationend", determineWinner);


    //0=rock,1=paper,2=scissor


}

function determineWinner() {
    console.log("determineWinner");

    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    if (userChoice === "rock") {

        document.querySelector("#player1").classList.add("rock");

        if (codeChoice === 0) {

            document.querySelector("#player2").classList.add("rock");

            showDraw();

        } else if (codeChoice === 1) {

            document.querySelector("#player2").classList.add("paper");

            showLoser();

        } else {

            document.querySelector("#player2").classList.add("scissors");

            showWinner();

        }

    } else if (userChoice === "paper") {

        document.querySelector("#player1").classList.add("paper");

        if (codeChoice === 0) {

            document.querySelector("#player2").classList.add("rock");

            showWinner();

        } else if (codeChoice === 1) {

            document.querySelector("#player2").classList.add("paper");

            showDraw();

        } else {

            document.querySelector("#player2").classList.add("scissors");

            showLoser();

        }

    } else {

        document.querySelector("#player1").classList.add("scissors");

        if (codeChoice === 0) {

            document.querySelector("#player2").classList.add("rock");

            showLoser();

        } else if (codeChoice === 1) {

            document.querySelector("#player2").classList.add("paper");

            showWinner();

        } else {

            document.querySelector("#player2").classList.add("scissors");

            showDraw();

        }

    }

}

function showWinner() {

    document.querySelector("#win").classList.remove("hidden");

    console.log("showWinner");

}

function showLoser() {

    document.querySelector("#lose").classList.remove("hidden");

    console.log("showLoser");

}

function showDraw() {

    document.querySelector("#draw").classList.remove("hidden");

    console.log("showDraw");

}