function bonusScore(input) {
    let score = Number(input[0]);
    let bonus_score = 0;
    
    if (score <= 100) {
        bonus_score += 5;
    }
    else if (score > 100 && score <= 1000) {
        bonus_score += score * 0.2;
    }
    else if (score > 1000) {
        bonus_score += score * 0.1;
    }

    if (score % 2 === 0) {
        bonus_score += 1;
    }

    if (score % 10 === 5) {
        bonus_score += 2
    }
    console.log(bonus_score);
    console.log(bonus_score + score)
}

// bonusScore(["20"]);
