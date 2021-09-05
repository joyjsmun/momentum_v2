
const quotes = [
    {
        quote : "“First, solve the problem. Then, write the code.”",
        author : "- John Johnson"
    },
    {
        quote : "“Simplicity is the soul of efficiency.”",
        author : "- Austin Freeman"
    },
    {
        quote :"실패보다 무서운건 후회",
        author : "- Joy Mun"
    },
    {
        quote :"믿으면 당신은 그곳에 닿을수 있다",
        author : "- Joy Mun"
    },
    {
        quote :"나 자신의 큰 거인을 깨워라",
        author : "- Joy Mun"
    },
    {
        quote :"Be Irreplaceable!",
        author : "- Joy Mun"
    }
]

const quoteContainer = document.querySelector(".quoteContainer");
const randomNum = Math.floor(Math.random()*quotes.length);
const todayQuote = document.querySelector("#quote");
const todayAuthor = document.querySelector("#author");

todayQuote.innerText = quotes[randomNum].quote;
todayAuthor.innerText = quotes[randomNum].author;



