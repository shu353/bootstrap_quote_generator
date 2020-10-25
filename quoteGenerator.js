window.onload = innit;

const quotesArray = [
    {
        quote: "There's a lot of beauty in the world, so go hang out and go be a part of the solution rather than the problem.",
        author: "Mac ramdom"
    }, {
        quote: "To me, women have always been the sturdiest people in my life and have been incredible sources of energy.",
        author: "Mac Miller"
    }, {
        quote: "Enjoy the best things in your life cuz you ain’t gonna get to live it twice.",
        author: "Miller Mac"
    },

    {
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author: "Robert Frost"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart"
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth"
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone"
    },
    {
        quote: "We must balance conspicuous consumption with conscious capitalism.",
        author: "Kevin Kruse"
    },
    {
        quote: "Life is what happens to you while you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "We become what we think about.",
        author: "Earl Nightingale"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        author: "Mark Twain"
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll"
    },
    {
        quote: "The most common way people give up their power is by thinking they don’t have any.",
        author: "Alice Walker"
    }
]

function innit() {
    generateQuote();
}

function generateQuote() {
    const quoteLength = quotesArray.length;
    let randomIndex = Math.floor(Math.random() * quoteLength);
    let randomQuote = quotesArray[randomIndex];
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
    //quote

    let quoteApiFormat = randomQuote.quote.replace(/ /g, "%20");
    twitterLink += quoteApiFormat;
    //author
    let authorApiFormat = randomQuote.author.replace(/ /g, "%20");
    twitterLink += "-" + authorApiFormat;

    document.getElementById("tweet-quote").href = twitterLink;

    document.getElementById("text").innerText = randomQuote.quote;
    document.getElementById("author").innerText = randomQuote.author;
}