/******************************************
Treehouse JavaScript Techdegree:
Project 1 - A Random Quote Generator
******************************************/

//An array of multiple objects of quotes
var quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    source: "Nelson Mandela",
    citation: "",
    year: ""
  },
  {
    quote: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    source: "Bruce Lee",
    citation: "",
    year: ""
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "",
    year: ""
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    citation: "",
    year: ""
  },
  {
    quote: "It's the possibility of having a dream come true that makes life interesting.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: "1988"
  }
];


// a function that generates a number between 0 and 4 use for array index.
function getRandomQuote(){
  var ranNumber = Math.floor( Math.random() * 5 ) ;
  return ranNumber;

}

//function that calls getRandomQuote(), checks if citation and year exists and then output the quote with html
function printQuote(){
  var quoteNumber = getRandomQuote();
  var quoteID = quotes[quoteNumber];
  var citation;
  var year;
  if(quoteID.citation !== "") {
    citation = "<span class='citation'>" + quoteID.citation + "</span>";
  }
  else {
    citation = "";
  }
  if(quoteID.year !== ""){
    year = "<span class='year'>" + quoteID.year + "</span>";
  }
  else {
    year = "";
  }
  var output = "<p class='quote'>" + quoteID.quote + "</p><p class='source'>" + quoteID.source + citation + year + "<p>";
  return output;
}
//returns and output quote
document.getElementById("quote-box").innerHTML = printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


function randomBackgroundColor(){
  var red = Math.floor( Math.random() * 256) ;
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );
  var background = "rgb(" + red + "," + green + "," + blue + ")";
  return background;
}
document.body.style.backgroundColor = randomBackgroundColor();
document.getElementById("loadQuote").style.backgroundColor = randomBackgroundColor();

setInterval(printQuote(), 10);
