document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let wordsArr = [];
   let divSelector = document.getElementById('content');
   let inputText = document.getElementById('task-input');

   inputText.addEventListener('submit', function(e){
      e.preventDefault();
      let inputValue = inputText.querySelector('input[type="text"]').value;
      wordsArr = inputValue.split(', ');
      for (let w of wordsArr) {
         let div = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = w;
         p.style.display = 'none';
         
         div.appendChild(p);
         div.addEventListener('click', onClick);

         divSelector.appendChild(div);
      }

      function onClick(e){
         let currP = e.currentTarget.getElementsByTagName('p')[0];
         currP.style.display = 'block';
      }
      //console.log(wordsArr);
 
   });


}
