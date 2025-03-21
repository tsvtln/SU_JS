function solve() {
   let elements = Array.from(document.querySelectorAll('tbody'))[0].children;
   let searchField = document.getElementById('searchField');
   let searchText = searchField.value.toLowerCase();
   let foundRows = [];

   for (let row of elements) {
      row.className = '';
   }

   if (searchText === '') {
      searchField.value = '';
      return;
   }

   for (let row of elements) {
      let cleaned = row.textContent
         .trim()
         .split('\n')
         .map(cell => cell.trim().toLowerCase());

      for (let text of cleaned) {
         if (text.includes(searchText)) {
            foundRows.push({ data: cleaned, element: row });
            break;
         }
      }
   }

   for (let entry of foundRows) {
      entry.element.className = 'select';
   }

   searchField.value = '';
}
