/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array - an array of quote objects to display at random on the index.html page
***/
const quotes = [
  {quote: 'Be yourself; everyone else is already taken.', source: 'Oscar Wilde', category: 'Wisdom'},
  {quote: 'True terror is to wake up one morning and discover that your high school class is running the country.', source: 'Kurt Vonnegut', citation: '', year: 2015, category: 'Humour'},
  {quote: 'Doing nothing is very hard to do. You never know when you\'re finished.', source: 'Leslie Nielsen', citation: 'Everything I Know About Parenting I Learned From Leslie Nielsen', year: 2010, category: 'Wisdom'},
  {quote: 'If we did all the things we are capable of doing, we would literally astound ourselves.', source: 'Thomas A. Edison', citation: 'Motivating Humans : Goals, Emotions, and Personal Agency Beliefs', year: 1992, category: 'Inspiration'},
  {quote: 'If you can\'t be kind, at least be vague.', source: 'Judith Martin', year: 1997, category: 'Humour'},
];

/***
 * Create a random value to use in the changeBackground function.
 * 
***/
const randomValue = () => Math.floor(Math.random() * 256);


/***
 * Change the page background to a random colour.
 * 
***/
function changeBackground(){
  const color = `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()} )`;
  document.body.style.backgroundColor = color; // selector found on W3c site (https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp)
}


/***
 * Selects a random object item from an array of quotes.
 * @param {array} arr - An array of quote objects.
 * @returns {object} A single quote object selected from the array.
 * 
***/
function getRandomQuote(arr){
  // Create a random number netween 0 and the length of the supplied array.
  const randomNumber = Math.floor( Math.random() * arr.length);
  return arr[randomNumber];
}



/***
 * Print a random quote item to the index.html page.
***/
function printQuote(){
  // Call the getRandomQuote function, passing it the quotes array as an argument and storing the result.
  const currentQuote = getRandomQuote(quotes);
  // Build an HTMl string to display on the page.
  let HTML = `
  <p class="quote">${currentQuote.quote}</p>
  <p class="source">${currentQuote.source}`
  // Check if the quotes object has either a citation or a year and add them to the HTML string if they exist.
  if(currentQuote.citation){
    HTML += `<span class="citation">${currentQuote.citation}</span>`;
  }
  if(currentQuote.year){
    HTML += `<span class="year">${currentQuote.year}</span>`;
  }
  // Extra credit - display an extra property from the quotes object array. 
  if(currentQuote.category){
    HTML += ` : <span><em>${currentQuote.category}</em></span>`;
  }
  HTML += `</p>`
  // Extra credit - Call the changeBackground function to display a random background for the quote.
  changeBackground();
  // Insert the HTML string into the quote-box div.
  document.getElementById('quote-box').innerHTML = HTML;
}


// Extra credit - change the quote every ten seconds.
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);