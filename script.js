/**
 * A function to find a random integer between min and max inclusive.
 * 
 * @param {int} min The minimum value
 * @param {int} max The maximum value
 * @returns Random integer between min and max inclusive.
 */
function getRandomInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Fetches an array of objects from quotes api then outputs one of the quotes
 * with author attribution.
 */
fetch("https://type.fit/api/quotes")
    .then( response => response.json() )
    .then( data => {
        let sizeOfArray = data.length;
        let index = getRandomInclusive(0, sizeOfArray);
        let selectedQuote = data[index];

        console.log(`"${selectedQuote.text}" - ${selectedQuote.author}.`);
    });
