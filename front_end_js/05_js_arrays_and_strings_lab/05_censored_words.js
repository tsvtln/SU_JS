function censoreship(sentence, cesnorWord) {
    console.log(sentence.replaceAll(cesnorWord, '*'.repeat(cesnorWord.length)));
}

censoreship('A small sentence with some words', 'small');
censoreship('Find the hidden word', 'hidden');