function gradeFormatter(grade){
    let tp = '';

    if(grade < 3){
        tp = `Fail (2)`;
    }
    else if(grade < 3.50){
        tp = `Poor (${grade.toFixed(2)})`;
    }
    else if(grade < 4.50){
        tp = `Good (${grade.toFixed(2)})`;
    }
    else if(grade < 5.50){
        tp = `Very good (${grade.toFixed(2)})`;
    }
    else{
        tp = `Excellent (${grade.toFixed(2)})`;
    }

    console.log(tp);
}

gradeFormatter(3.33);
gradeFormatter(4.50);
gradeFormatter(2.99);