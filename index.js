document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let returnFetch = fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(data => renderBooks(data))
  return returnFetch;
 


}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(books => {
    const h2 = document.createElement('h2');
    h2.innerHTML = books.name;
    main.appendChild(h2);
  });
  
}


