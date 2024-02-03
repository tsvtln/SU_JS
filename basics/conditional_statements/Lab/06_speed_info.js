function speedInfo(input) {
    let speed = Number(input);
    let to_print = ''
    if (speed <= 10) {
        to_print = 'slow';
    }
    else if (speed > 10 && speed <= 50) {
        to_print = 'average';
    }
    else if (speed > 50 && speed <= 150) {
        to_print = 'fast';
    }
    else if (speed > 150 && speed <= 1000) {
        to_print = 'ultra fast';
    }
    else {
        to_print = 'extremely fast';
    }
    console.log(to_print);
}

// speedInfo(["8"])
