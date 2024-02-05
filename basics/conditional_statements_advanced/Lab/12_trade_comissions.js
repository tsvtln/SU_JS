function tradeComissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let valid_cities = ['Sofia', 'Varna', 'Plovdiv'];
    let result = 0
    let temp_res = 0
    let comissions = {
        Sofia: {
            '0_500': 1.05,
            '500_1000': 1.07,
            '1000_10000': 1.08,
            '>10000': 1.12
        },
        Varna: {
            '0_500': 1.045,
            '500_1000': 1.075,
            '1000_10000': 1.10,
            '>10000': 1.13
        },
        Plovdiv: {
            '0_500': 1.055,
            '500_1000': 1.08,
            '1000_10000': 1.12,
            '>10000': 1.145
        }
    }

    if ((sales < 0) || !valid_cities.includes(city)) {
        to_print = 'error';
    }
    else {
        switch (city) {
            case 'Sofia':
                switch (true) {
                    case (sales >= 0 && sales <= 500):
                        temp_res = sales * comissions['Sofia']['0_500'];
                        result = temp_res - sales;
                        break;
                    
                    case (sales >= 500 && sales <= 1000):
                        temp_res = sales * comissions['Sofia']['500_1000'];
                        result = temp_res - sales;
                        break;
                    
                    case (sales >= 1000 && sales <= 10000):
                        temp_res = sales * comissions['Sofia']['1000_10000']
                        result = temp_res - sales;
                        break;

                    default:
                        temp_res = sales * comissions['Sofia']['>10000'];
                        result = temp_res - sales;
                        break;
                }
                break;

            case 'Varna':
                switch (true) {
                case (sales >= 0 && sales <= 500):
                    temp_res = sales * comissions['Varna']['0_500'];
                    result = temp_res - sales;
                    break;
                
                case (sales >= 500 && sales <= 1000):
                    temp_res = sales * comissions['Varna']['500_1000'];
                    result = temp_res - sales;
                    break;
                
                case (sales >= 1000 && sales <= 10000):
                    temp_res = sales * comissions['Varna']['1000_10000']
                    result = temp_res - sales;
                    break;

                default:
                    temp_res = sales * comissions['Varna']['>10000'];
                    result = temp_res - sales;
                    break;
                }
                break;

            case 'Plovdiv':
                switch (true) {
                    case (sales >= 0 && sales <= 500):
                        temp_res = sales * comissions['Plovdiv']['0_500'];
                        result = temp_res - sales;
                        break;
                    
                    case (sales >= 500 && sales <= 1000):
                        temp_res = sales * comissions['Plovdiv']['500_1000'];
                        result = temp_res - sales;
                        break;
                    
                    case (sales >= 1000 && sales <= 10000):
                        temp_res = sales * comissions['Plovdiv']['1000_10000']
                        result = temp_res - sales;
                        break;

                    default:
                        temp_res = sales * comissions['Plovdiv']['>10000'];
                        result = temp_res - sales;
                        break;
                }
                break;
        }
    
    }

    if (result != 0) {
        console.log(result.toFixed(2));
    }
    
    else {
        console.log(to_print);
    }
}

// tradeComissions(["Sofia", "1500"]);
// tradeComissions(["Plovdiv", "499.99"]);
// tradeComissions(["Varna", "3874.50"]);
// tradeComissions(["Kaspichan", "-50"]);
