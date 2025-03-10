function addressBook(details){
    let addressInfo = {};

    function sortObjectByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));
    }

    for (let data of details){
        let [name, address] = data.split(':');
        addressInfo[name] = address;
    }

    let sortedInfo = sortObjectByKeys(addressInfo);

    for (let [k, v] of Object.entries(sortedInfo)){
        console.log(`${k} -> ${v}`);
    }
}

addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave','George:Mesta Crossing','Ted:Gateway Way','Bill:Gateway Way','John:Grover Rd','Peter:Huxley Rd','Jeff:Gateway Way','Jeff:Huxley Rd']);