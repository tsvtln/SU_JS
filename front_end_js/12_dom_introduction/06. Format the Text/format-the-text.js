// 80/100
function solve() {
  let inputField = document.getElementById('input').value;
  let outputField = document.getElementById('output');
  let result = [];
  let tempSentence = '';
  let dotCoutner = 0;

  for (i=0; i < inputField.length; i++){
    w = inputField[i]
    if (inputField[i] === '.') {
      tempSentence += w;
      dotCoutner += 1;
    }
  
    if (dotCoutner === 3) {
      result.push(tempSentence);
      dotCoutner = 0;
      tempSentence = '';
      continue;
    }

    if (w != '.'){
    tempSentence += w;
    }
    if (i === inputField.length - 1) {
      result.push(tempSentence);
    }
  }

  for (let text of result) {
    let p = document.createElement('p');
    p.textContent = text;
    outputField.appendChild(p);
  }
  
  // console.log(result)
}

// 100/100
// function solve() {
//   const input = document.getElementById('input').value;
//   const output = document.getElementById('output');
//   output.innerHTML = '';

//   const sentences = input.split('.').filter(s => s.trim() !== '').map(s => s.trim() + '.');
//   let paragraph = [];

//   for (let i = 0; i < sentences.length; i++) {
//     paragraph.push(sentences[i]);

//     if (paragraph.length === 3 || i === sentences.length - 1) {
//       const p = document.createElement('p');
//       p.textContent = paragraph.join(' ');
//       output.appendChild(p);
//       paragraph = [];
//     }
//   }
// }
