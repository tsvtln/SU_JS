// non working solution

function inventoryData(stock, ordered) {
    let itemsStockName = stock.filter((el, idx) => {return idx % 2 === 0;});
    let itemStockQuantity = stock.filter((el, idx) => {return idx % 2 != 0;});
    let itemsOrderName = ordered.filter((el, idx) => {return idx % 2 === 0;});
    let itemsOrderQuantity = ordered.filter((el, idx) => {return idx % 2 != 0;});
    let myInv = new Map();
    let order = new Map();
    let rangeFinder = itemStockQuantity.length;

    for (let i=0; i<rangeFinder; i++){
        myInv.set(itemsStockName[i], Number(itemStockQuantity[i]));
    }

    for (let i=0; i<rangeFinder; i++){
        order.set(itemsOrderName[i], Number(itemsOrderQuantity[i]));
    }

    for (let [i, q] of order) {
        const invCheck = myInv.has(i);

        if (invCheck) {
            myInv.set(i, myInv.get(i) + q);
        } else {
            myInv.set(i, q);
        }
    }
    
    for (let [i, q] of myInv){
        console.log(`${i} -> ${q}`)
    }
}

inventoryData(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
inventoryData(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);


// working solution
function solve(arr1, arr2){
    let store = {};
    store = addInStore(arr1, store);
    store = addInStore(arr2, store);
    Object.entries(store).map(([key, value]) => console.log(`${key} -> ${value}`))

    function addInStore(arr, store){
        for (let i = 0; i < arr.length; i += 2){
            let product = arr[i];
            let quantiy = arr[i + 1];
            if (!(product in store)){
                store[product] = 0;
            }
            store[product] += Number(quantiy);
        }
        return store
    };
}


solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);

