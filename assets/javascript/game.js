var wins = 0, losses = 0;
var gemVals, score, targetScore;

function generateVals() {
    return {
        "diamond": Math.ceil(Math.random() * 12),
        "lapis": Math.ceil(Math.random() * 12),
        "emerald": Math.ceil(Math.random() * 12),
        "redstone": Math.ceil(Math.random() * 12)
    }
}

function resetGame() {
    score = 0;
    targetScore = Math.floor(Math.random() * 90 + 30);
    gemVals = generateVals();
}

function update() {
    $("#score").html(score);
    $("#targetScore").html(targetScore);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
}

resetGame();
$(document).ready(function () {
    update();

    $(".pics").on("click", function () {
        score += gemVals[$(this).attr("id")];

        if (score == targetScore) {
            wins++;
            $("#game-state").html("You Won!");
            resetGame();
        } 
        else if (score > targetScore) {
            losses++;
            $("#game-state").html("You Lost! xD");
            resetGame();
        }

        update();
    });

});