// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "I feel like a lion , because you're my pride and joy. - Anezka K Joseph",
    " There is one of you , only one. - Liam J Moodley"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote;
}

// Event listener for the button click
document.getElementById('generate-btn').addEventListener('click', generateQuote);

// Initial quote generation
generateQuote();
