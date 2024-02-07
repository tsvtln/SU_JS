function vowelsSum(input) {
    let vowels_list = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    let text = input[0];


    for (i = 0; i < text.length; i++) {
        let letter = text[i];
        if (vowels_list.includes(letter)) {
            switch (letter) {
                case 'a':
                    result += 1;
                    break;
                case 'e':
                    result += 2;
                    break;
                case 'i':
                    result += 3;
                    break;
                case 'o':
                    result += 4;
                    break;
                case 'u':
                    result += 5;
                    break;
            }
        }
    }

    console.log(result);
}

// vowelsSum(["hello"]);
// vowelsSum(["hi"]);
// vowelsSum(["bamboo"]);
// vowelsSum(["beer"]);
