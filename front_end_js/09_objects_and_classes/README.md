### Iteraterate over objects
    for (let [n, v] of Object.entries(phoneCatalogue)){
        console.log(`${n} -> ${v}`);
    }

### Sort objects

    function sortObjectByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));
    }
