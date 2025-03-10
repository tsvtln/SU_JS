function phoneBook(namePhone) {
    phoneCatalogue = {};
    for (details of namePhone) {
        let [name_, phone] = details.split(' ');
        //console.log(name_, phone);
        phoneCatalogue[name_] = phone;}
    
    for (let [n, v] of Object.entries(phoneCatalogue)){
        console.log(`${n} -> ${v}`);
    }
}

phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);
phoneBook(['George 0552554','Peter 087587','George 0453112','Bill 0845344']);