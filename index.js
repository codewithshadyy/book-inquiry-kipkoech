const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        theme: 'fiction'
    },
    {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        theme: 'non-fiction'
    },
    {
        title: '1984',
        author: 'George Orwell',
        theme: 'science-fiction'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        theme: 'fantasy'
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        theme: 'mystery'
    }
];


// Th e search functionality

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // collect the necessary values for the  search objects
    const query = document.getElementById('search-query').value.toLowerCase();
    const theme = document.getElementById('book-theme').value;

    // filter the books by author's name, title or by theme
    const filteredBooks = books.filter(book => {
        const matchesQuery = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
        const matchesTheme = theme === 'all' || book.theme === theme;
        return matchesQuery && matchesTheme;
    });
    displayResults(filteredBooks);
});
// displaying the books via the dom
function displayResults(books) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (books.length === 0) {
        resultsDiv.innerHTML = '<p>No books found, try a different search.</p>';
    } else {
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('result-item');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Theme: ${book.theme.charAt(0).toUpperCase() + book.theme.slice(1)}</p>
            `;
            resultsDiv.appendChild(bookElement);
        });
    }
}
