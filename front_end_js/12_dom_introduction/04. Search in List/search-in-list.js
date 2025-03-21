function solve() {
   const towns = Array.from(document.querySelectorAll('ul li'));
   const searchText = document.getElementById('searchText').value.toLowerCase();
   let matches = 0;

   for (let town of towns) {
       town.innerHTML = town.textContent;

       if (searchText !== '' && town.textContent.toLowerCase().includes(searchText)) {
           const regex = new RegExp(`(${searchText})`, 'gi');
           town.innerHTML = town.textContent.replace(regex, `<span style="font-weight: bold">$1</span>`);
           matches++;
       }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}
