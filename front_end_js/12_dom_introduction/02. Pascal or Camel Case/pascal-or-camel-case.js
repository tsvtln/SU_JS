function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  let output = '';
  let textArr = []
  let textOut = []
  let outputField = document.getElementById('result');

  if (namingConvention === 'Camel Case'){
    textArr = text.split(' ');
    for (i = 0; i < textArr.length; i++){
      if (i===0){
        textOut.push(textArr[i].toLowerCase());
      } else {
        let wordToLower = textArr[i].toLowerCase();
        let capitalized = wordToLower[0].toUpperCase() + wordToLower.slice(1);
        textOut.push(capitalized);
      }
    }
    output = textOut.join('');
  } else if (namingConvention === 'Pascal Case'){
    textArr = text.split(' ');
    for (let word of textArr){
      let wordToLower = word.toLowerCase();
      let capitalized = wordToLower[0].toUpperCase() + wordToLower.slice(1);
      textOut.push(capitalized);
    }
    console.log(textOut)
    output = textOut.join('');
  } else {
    output = 'Error!'
  }
  outputField.textContent = output;
}