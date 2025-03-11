function employees(arr){
    class Emp {
        name;
        lengthOfName;

        constructor(name, lengthOfName) {
            this.name = name;
            this.lengthOfName = lengthOfName;
        }
    }
    
    let employeesStorage = [];

    for (let employee of arr){
        let name = employee;
        let length = name.length;

        employeesStorage.push(new Emp(name, length));
    }

    for (let emp of employeesStorage) {
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.lengthOfName}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );