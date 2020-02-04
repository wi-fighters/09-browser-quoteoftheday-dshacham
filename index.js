(() => {
    const h2 = document.querySelector('h2');
    const button = document.querySelector('button');

    const randomQuote = function () {
        const quotes = ['But I don\'t wanna be a pirate!', 'Finally my stupidity pays off!', 'Guiddy up', 'They\'re real, and they\'re fabulous.', 'No soup for you!'];

        const generateQuote = quotes[Math.floor(quotes.length * Math.random())];

        return h2.textContent = generateQuote;
    }

    window.addEventListener('load', randomQuote, false);
    button.addEventListener('click', randomQuote, false);
})();