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
    year: "",
    tag: "Motivation"
  },
  {
    quote: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    source: "Bruce Lee",
    citation: "",
    year: "",
    tag: "Motivation"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "",
    year: "",
    tag: "Motivation"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    citation: "",
    year: "",
    tag: "Life"
  },
  {
    quote: "It's the possibility of having a dream come true that makes life interesting.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: "1988",
    tag: "Dream, Life"
  }
];


// a function that generates a number between 0 and 4 use for array index and returns that object.
function getRandomQuote(){
  var ranNumber = Math.floor( Math.random() * 5 ) ;
  var quoteNumber = ranNumber;
  var ranObject = quotes[quoteNumber];
  return ranObject;

}

//function that calls getRandomQuote(), checks if citation and year exists and then output the quote with html
function printQuote(){
  var quoteObject = getRandomQuote();
  var citation;
  var year;
  if(quoteObject.citation !== "") {
    citation = "<span class='citation'>" + quoteObject.citation + "</span>";
  }
  else {
    citation = "";
  }
  if(quoteObject.year !== ""){
    year = "<span class='year'>" + quoteObject.year + "</span>";
  }
  else {
    year = "";
  }
  var string = "<p class='quote'>" + quoteObject.quote + "</p><p class='source'>" + quoteObject.source + citation + year + "<p>" + "<p>Tags: " + quoteObject.tag + "</p>";
  var output = document.getElementById("quote-box").innerHTML = string;
  return output;
}

//change quote and color when button clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", colorChange, false);

//function that uses generates random numbers for red, green, blue
function randomBackgroundColor(){
  var red = Math.floor( Math.random() * 256) ;
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );
  var background = "rgb(" + red + "," + green + "," + blue + ")";
  return background;
}
//calls randomBackgroundColor() function and applies it to the body and loadquote id
function colorChange(){
document.body.style.backgroundColor = randomBackgroundColor();
document.getElementById("loadQuote").style.backgroundColor = randomBackgroundColor();
}


//quote and background color changes every 5 seconds
var setInterval = setInterval(function(){
  printQuote();
  colorChange();
}, 5000);
