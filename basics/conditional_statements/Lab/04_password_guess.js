function passwordGuess(input) {
    let enetered_pass = String(input)
    if (enetered_pass === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    }
    else {
        console.log('Wrong password!')
    }
}

// passwordGuess(["qwerty"])
// passwordGuess(["s3cr3t!P@ssw0rd"])
