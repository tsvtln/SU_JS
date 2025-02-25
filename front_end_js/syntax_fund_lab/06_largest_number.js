function largest_num(n1, n2, n3) {
    let nums = [n1, n2, n3]
    let tp = ''
    for (let i = 0; i < nums.length; i++){
        if (i === 0){
            tp = nums[i]
        }
        else {
            if (tp < nums[i]) {
                tp = nums[i]
            }
        }
    }

    console.log(`The largest number is ${tp}.`)
}

// largest_num(5, -3, 16)
// largest_num(-3, -5, -22.5)