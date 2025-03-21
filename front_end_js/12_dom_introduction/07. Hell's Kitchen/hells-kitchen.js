function solve() {
    let input = document.getElementById('inputs').children[1].value;
    let workers = JSON.parse(input);
    let bestRestaurantParagraph = (document.getElementById('bestRestaurant')).querySelector('p');
    let bestWorker = (document.getElementById('workers')).querySelector('p');
    let restData = {};

    for (let data of workers) {
        let [restaurantName, workersStr] = data.split(' - ');
        let workersArr = workersStr.split(', ');

        if (!restData.hasOwnProperty(restaurantName)) {
            restData[restaurantName] = {};
        }

        for (let worker of workersArr) {
            let [name, salary] = worker.split(' ');
            restData[restaurantName][name] = Number(salary);
        }
    }

    let bestRestaurant = '';
    let bestAvgSalary = 0;

    for (let [restaurantName, workersObj] of Object.entries(restData)) {
        let salaries = Object.values(workersObj);
        let avgSalary = salaries.reduce((a, b) => a + b, 0) / salaries.length;

        if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestRestaurant = restaurantName;
        }
    }

    let sortedWorkers = Object.entries(restData[bestRestaurant]).sort((a, b) => b[1] - a[1]);

    let bestSalary = sortedWorkers[0][1];

    bestRestaurantParagraph.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    bestWorker.textContent = sortedWorkers.map(([name, salary]) => `Name: ${name} With Salary: ${salary}`).join(' ');
}
