function print_and_sum(num1, num2){
    let final_sum = 0;
    let list_nums = []
    for (let i = num1; i <= num2; i++) {
        list_nums.push(i);
        final_sum += i;
    }

    console.log(list_nums.join(" "));
    console.log(`Sum: ${final_sum}`);
}

print_and_sum(5, 10);
print_and_sum(0, 26);
print_and_sum(50, 60);