// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate a random joke
function generateJoke() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your joke...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const jokes = [
            "I stayed up all night wondering where the sun went. Then it dawned on me.",
            "You know Orion's belt? Waist of space.",
            "Never tell a pun to a kleptomaniac. They're always taking things literally.",
            "You’ve heard of Murphy’s law right? It says that anything that can go wrong will go wrong. But have you heard of Cole’s law? It’s thinly sliced cabbage.",
            "Why don't eggs tell jokes? They'd crack each other up.",
            "What do you call a fake noodle? An impasta!",
            "Why did the math book look so sad? Because it had too many problems.",
            "What do you call a bear with no teeth? A gummy bear!",
            "Why don't skeletons fight each other? They don't have the guts.",
            "What do you call a can opener that doesn't work? A can't opener!",
            "Why did the bicycle fall over? Because it was two-tired!",
            "What do you call a boomerang that doesn't come back? A stick.",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one."
        ];

        // Shuffle the jokes array
        shuffleArray(jokes);

        // Select the first joke after shuffling
        const joke = jokes[0];

        // Display the joke in the content-container
        const newContent = `<p><strong>Generated Joke:</strong><br>${joke}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate an inspirational quote
function generateInspirationalQuote() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your inspirational quote...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const quotes = [
            "The best way to predict the future is to invent it.",
            "Believe you can and you're halfway there.",
            "In the middle of every difficulty lies opportunity.",
            "The only way to do great work is to love what you do.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Strive not to be a success, but rather to be of value.",
            "The only limit to our realization of tomorrow will be our doubts of today.",
            "It does not matter how slowly you go as long as you do not stop.",
            "You miss 100% of the shots you don't take.",
            "The best revenge is massive success.",
            "The journey of a thousand miles begins with one step.",
            "Do what you can, with what you have, where you are."
        ];

        // Shuffle the quotes array
        shuffleArray(quotes);

        // Select the first quote after shuffling
        const quote = quotes[0];

        // Display the quote in the content-container
        const newContent = `<p><strong>Generated Quote:</strong><br>${quote}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate a math/smart joke
function generateMathJoke() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your math joke...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const mathJokes = [
            "Why do mathematicians never trust atoms? Because they make up everything!",
            "Parallel lines have so much in common. It's a shame they'll never meet.",
            "I told my wife she should embrace her mistakes. She gave me a hug.",
            "Why was the math book sad? Because it had too many problems.",
            "What do you call a number that can't keep still? A roamin' numeral.",
            "Why did the polynomial plant die? It's roots were imaginary.",
            "Why was six afraid of seven? Because seven eight nine!",
            "What did the zero say to the eight? Nice belt!",
            "Why did the statistician bring a ladder to the bar? To reach the high bar.",
            "What do you call a teapot of boiling water on top of Mount Everest? A high-pot-in-use!",
            "Why don't programmers like nature? It has too many bugs.",
            "Why did the computer go to the doctor? It had a virus!",
            "What do you call a clever angle? A cute angle!"
        ];

        // Shuffle the mathJokes array
        shuffleArray(mathJokes);

        // Select the first math joke after shuffling
        const mathJoke = mathJokes[0];

        // Display the math joke in the content-container
        const newContent = `<p><strong>Generated Math Joke:</strong><br>${mathJoke}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate a random trivia fact
function generateTriviaFact() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your trivia fact...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const triviaFacts = [
            "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
            "A group of flamingos is called a flamboyance.",
            "The first oranges weren't orange - they were green.",
            "The longest word in the English language without a vowel is 'rhythms'.",
            "A jiffy is an actual unit of time: 1/100th of a second.",
            "The Great Wall of China is not visible from space with the naked eye.",
            "Bananas are berries, but strawberries aren't.",
            "A day on Venus is longer than its year.",
            "The inventor of the frisbee was turned into a frisbee after he died.",
            "There are more possible iterations of a game of chess than there are atoms in the known universe.",
            "The longest English word without a vowel is 'rhythms'.",
            "Humans share 50% of their DNA with bananas."
        ];

        // Shuffle the triviaFacts array
        shuffleArray(triviaFacts);

        // Select the first trivia fact after shuffling
        const fact = triviaFacts[0];

        // Display the trivia fact in the content-container
        const newContent = `<p><strong>Generated Trivia Fact:</strong><br>${fact}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate a random affirmation
function generateAffirmation() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your affirmation...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const affirmations = [
            "In your darkest moments, remember: you've overcome every obstacle life has thrown at you so far.",
            "Your scars are not flaws, but testaments to your strength and resilience.",
            "The world is better because you're in it, even on days when you can't see it.",
            "Your struggles are not a sign of weakness, but of a soul brave enough to persevere.",
            "You are not defined by your mistakes, but by how you rise after each fall.",
            "Your worth is not measured by what you achieve, but by the love you carry within.",
            "The pain you've endured has sculpted you into someone capable of profound empathy.",
            "Your journey is uniquely yours - comparisons to others diminish your incredible story.",
            "In a world that can be cruel, your kindness is a radical act of courage.",
            "You are enough - not because of what you do, but simply because you exist.",
            "Your vulnerability is not weakness; it's the source of your deepest connections.",
            "The light within you can illuminate paths for others, even in your own darkness.",
            "Your presence has the power to heal wounds you can't even see."
        ];

        // Shuffle the affirmations array
        shuffleArray(affirmations);

        // Select the first affirmation after shuffling
        const affirmation = affirmations[0];

        // Display the affirmation in the content-container
        const newContent = `<p><strong>Generated Affirmation:</strong><br>${affirmation}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate a random riddle
function generateRiddle() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your riddle...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const riddles = [
            "What has keys but can't open locks? A piano.",
            "The more you take, the more you leave behind. What am I? Footsteps.",
            "What has a head, a tail, is brown, and has no legs? A penny.",
            "I'm tall when I'm young, and short when I'm old. What am I? A candle.",
            "What has cities, but no houses; forests, but no trees; and rivers, but no water? A map.",
            "What goes up but never comes down? Your age.",
            "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? An echo.",
            "You see a boat filled with people. It has not sunk, but when you look again you don't see a single person on the boat. Why? All the people were married.",
            "What has legs, but doesn't walk? A table.",
            "What can travel around the world while staying in a corner? A stamp.",
            "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? A map.",
            "What has a head and a tail that will never meet? A coin.",
            "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by everyone. What am I? A pencil lead."
        ];

        // Shuffle the riddles array
        shuffleArray(riddles);

        // Select the first riddle after shuffling
        const riddle = riddles[0];

        // Display the riddle in the content-container
        const newContent = `<p><strong>Generated Riddle:</strong><br>${riddle}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate a random fun fact
function generateFunFact() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your fun fact...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const funFacts = [
            "The average person spends six months of their lifetime waiting for a red light to turn green.",
            "The unicorn is the national animal of Scotland.",
            "Octopuses have three hearts.",
            "A group of crows is called a murder.",
            "The shortest war in history lasted 38 minutes.",
            "The world's oldest known living tree is over 5,000 years old.",
            "Cows have best friends and can become stressed when separated.",
            "The fingerprints of koalas are virtually indistinguishable from human fingerprints.",
            "The Hawaiian alphabet only has 12 letters.",
            "A bolt of lightning is six times hotter than the sun.",
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
            "The longest word in the English language without a vowel is 'rhythms'.",
            "A day on Venus is longer than its year."
        ];

        // Shuffle the funFacts array
        shuffleArray(funFacts);

        // Select the first fun fact after shuffling
        const fact = funFacts[0];

        // Display the fun fact in the content-container
        const newContent = `<p><strong>Generated Fun Fact:</strong><br>${fact}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Function to generate a motivational quote
function generateMotivationalQuote() {
    // Display loading message
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '<p>Loading your motivational quote...</p>';

    // Simulate asynchronous operation
    setTimeout(() => {
        const motivationalQuotes = [
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "Everything you've ever wanted is on the other side of fear. - George Addair",
            "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
            "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "The best way to predict the future is to create it. - Peter Drucker"
        ];

        // Shuffle the motivationalQuotes array
        shuffleArray(motivationalQuotes);

        // Select the first motivational quote after shuffling
        const quote = motivationalQuotes[0];

        // Display the motivational quote in the content-container
        const newContent = `<p><strong>Generated Motivational Quote:</strong><br>${quote}</p>`;
        contentContainer.innerHTML = newContent;
    }, 1000); // Simulate delay for loading effect (1 second)
}

// Event listeners for each button
document.getElementById('generate-joke-btn').addEventListener('click', generateJoke);
document.getElementById('generate-inspirational-btn').addEventListener('click', generateInspirationalQuote);
document.getElementById('generate-math-joke-btn').addEventListener('click', generateMathJoke);
document.getElementById('generate-trivia-fact-btn').addEventListener('click', generateTriviaFact);
document.getElementById('generate-affirmation-btn').addEventListener('click', generateAffirmation);

document.getElementById('generate-fun-fact-btn').addEventListener('click', generateFunFact);

