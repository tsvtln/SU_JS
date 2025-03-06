function passwordValidator(pwd){
    let isValid = true;
    let tp = '';
    
    function checkTP(){if(tp.length>1){tp+='\n';}}
    function checkLength(p){if(p.length < 6 || p.length > 10){tp = 'Password must be between 6 and 10 characters';isValid = false;}}
    function checkSymbols(p){if(!(/^[a-zA-Z0-9]+$/.test(p))){checkTP();tp += 'Password must consist only of letters and digits';isValid = false;}}
    function checkDigits(p) {if (!((p.match(/\d/g) || []).length >= 2)){checkTP();tp += 'Password must have at least 2 digits';isValid = false;}}
    
    checkLength(pwd);checkSymbols(pwd);checkDigits(pwd);
    
    if(isValid){tp = 'Password is valid'}
    
    console.log(tp);
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
