// jeoprady blue hex - #060CE9
console.log('this is a test')

// Pseudocode

// Create a heading - This... Is Jeoprady   or just use the Jeoprady logo

// Create a paragraph containing the instructions for the game.

// Create a play button that takes the user to the game board when clicked.

// Bonus - create an input field for the user to type in their name to displayed under the game board.

// Using javascript - create the game board (6x6) with categories listed on the top row and point values displayed in the squares underneath.

function createBoard() {
    let categories = ['Christmas', 'Sports', 'Movies', 'Geography', 'Cards', 'Alcohol']

    for (let i = 0; i < 36; i++) {
        let board = document.createElement('div')
        if (i <= 5 && i >= 0) {
            board.textContent = categories[i]
            board.classList.add('category')
        } else if (i > 5 && i <= 11) {
            board.textContent = '200';
            board.classList.add('question')
            board.setAttribute('data-points', '200')
        } else if (i > 11 && i <= 17) {
            board.textContent = '400'
            board.classList.add('question')
            board.setAttribute('data-points', '400')
        } else if (i > 17 && i <= 23) {
            board.textContent = '600'
            board.classList.add('question')
            board.setAttribute('data-points', '600')
        } else if (i > 23 && i <= 29) {
            board.textContent = '800'
            board.classList.add('question')
            board.setAttribute('data-points', '800')
        } else if (i > 29 && i <= 35) {
            board.textContent = '1000'
            board.classList.add('question')
            board.setAttribute('data-points', '1000')
        }
        if (i === 6 || i === 12 || i === 18 || i === 24 || i === 30) {
            board.setAttribute('data-category', 'christmas')
        } else if (i === 7 || i === 13 || i === 19 || i === 25 || i === 31) {
            board.setAttribute('data-category', 'movies')
        } else if (i === 8 || i === 14 || i === 20 || i === 26 || i === 32) {
            board.setAttribute('data-category', 'sports')
        } else if (i === 9 || i === 15 || i === 21 || i === 27 || i === 33) {
            board.setAttribute('data-category', 'geography')
        } else if (i === 10 || i === 16 || i === 22 || i === 28 || i === 34) {
            board.setAttribute('data-category', 'cards')
        } else if (i === 11 || i === 17 || i === 23 || i === 29 || i === 35) {
            board.setAttribute('data-category', 'alcohol')
            //create 36 divs - use if statement to add text and classes
        }

        document.querySelector('main').appendChild(board).classList.add('box') //

        board.addEventListener('click', function () {
            for (let i = 0; i < questions.length; i++) {
                if (questions[i].category === this.dataset.category && questions[i].pointValue === this.dataset.points) {
                    console.log(this.dataset)
                    // This is where you inject values from questions[i].text or options or whatever into the modal
                    // modal.heading.textContent = quesitons.[i].text
                }
            }

            // create for loop to go through questions array
            // create if statement to check questions[i].category === evt.target.dataset.category && questions[i].pointValue === evt.target.dataset.points 
            //then modal.heading.textContent = questions[i].text

        })
    }


}
function hideInstructions() {
    document.querySelector('.hideMe').classList.add('hidden')
}
document.querySelector('button').addEventListener('click', function () {
    hideInstructions();
    createBoard();

})

// Create a global variable to track the players score, set it equal to zero. Points will be added to or subtracted from this varibale as the user answers questions. 
let score = 0;
// Questions problem - how to store information about each question (text of question, choices for answers, point value, correct answers)
// Seperate these questions by category
// create a variable called questions - set it equal to an array of objects - each object contains the information for each question.

let questions = [
    // category 1 - christmas
    {
        text: "The color Christmas Elvis is will have without you.",
        pointValue: '200',
        options: ["What is red?", "What is blue?", "What is green?", "What is white?"],
        correct: "What is blue?",
        category: 'christmas'
    },
    {
        text: "This holiday drink is also known as milk punch",
        pointValue: '400',
        options: ["What is a White Russian?", "What is Mulled Wine", "What is eggnog?", "What is hot chocolate?"],
        correct: "What is eggnog?",
        category: 'christmas'
    },
    {
        text: "The number of ghosts that appear in A Christmas Carol",
        pointValue: '600',
        options: ["What is 2?", "What is 3?", "What is 4?", "What is 5?"],
        correct: "What is 4?",
        category: 'christmas'
    },
    {
        text: "The only present Ralphie asks for in A Christmas Story",
        pointValue: '800',
        options: ["What is a fire truck?", "What is a pet rock?", "What is a BB gun?", "What is an action figure?"],
        correct: "What is a BB gun?",
        category: 'christmas'
    },
    {
        text: "The country that began the traditon of putting up a Christmas tree",
        pointValue: '1000',
        options: ["What is Germany?", "What is the United States?", "What is Austria?", "What is Lebanon?"],
        correct: "What is Germany?",
        category: 'christmas'
    },
    { // category 2 - sports
        text: "The tool used to strike the ball in Tennis",
        pointValue: '200',
        options: ["What is a paddel?", "What is a racket?", "What is a club?", "What is the hand?"],
        correct: "What is a racket",
        category: 'sports'
    },
    {
        text: "The only NFL team that is publically owned",
        pointValue: '400',
        options: ["Who are the Tampa Bay Buccaneers?", "Who are the Dalas Cowboys?", "Who are The Green Bay Packers?", "Who are The Atlanta Falcons?"],
        correct: "Who are the Green Bay Packers?",
        category: 'sports'
    },
    {
        text: "The winningest coach in NFL history",
        pointValue: '600',
        options: ["Who is Dan Reeves?", "Who is Bill Belichick?", "Who is Tom Landry?", "Who is Don Shula?"],
        correct: "Who is Don Shula?",
        category: 'sports'
    },
    {
        text: "Famous golfer nicknamed The Golden Bear",
        pointValue: '800',
        options: ["Who is Jack Nicklaus?", "Who is Arnold Palmer?", "Who is Gary Player?", "Who is Tom Watson?"],
        correct: "Who is Jack Nicklaus",
        category: 'sports'
    },
    {
        text: "This NBA player went on to become mayor of Sacramento, California",
        pointValue: '1000',
        options: ["Who is Clyde Drexler?", "Who is Karl Malone?", "Who is Reggie Miller?", "Who is Kevin Johnson?"],
        correct: "Who is Kevin Johnson?",
        category: 'sports'
    },
    { // Category 3 - Movies 
        text: "Disney's 3D animation company",
        pointValue: '200',
        options: ["What is Dreamworks?", "What is Pixar?", "What is Blue Sky Studio?", "What is Imagination Engine?"],
        correct: "What is Pixar?",
        category: 'movies'
    },
    {
        text: "The title of the second Indiana Jones movie - Released in 1984",
        pointValue: '400',
        options: ["What is Indiana Jones and the Temple of Doom?", "What is Indiana Jones and the Raiders of Lost Arc?", "What is Indiana Jones and the Fountain of Youth?", "What is Indiana Jones and the Next Crusade?"],
        correct: "What is Indiana Jones and the Temple of Doom?",
        category: 'movies'
    },
    {
        text: "This actress plays Katniss Everdeen in the Hunger Games movies",
        pointValue: '600',
        options: ["Who is Kate Winslet?", "Who is Jennifer Lawrence?", "Who is Scarlett Johansson?", "Who is Ellen Page?"],
        correct: "Who is Scarlett Johansson?",
        category: 'movies'
    },
    {
        text: "Directed the epic historical drama Schindler's List in 1993",
        pointValue: '800',
        options: ["Who is Martin Scorsese?", "Who is Steven Spielberg?", "Who is Francis Ford Coppola?", "Who is Stanley Kubrick?"],
        correct: "Who is Steven Spielberg?",
        category: 'movies'
    },
    {
        text: "This was first year the Oscars were presented",
        pointValue: '1000',
        options: ["What is 1951?", "What is 1929?", "What is 1967?", "What is 1936?"],
        correct: "What is 1929?",
        category: 'movies'
    },
    { // Category 4 - Geography 
        text: "The smallest state in the United States",
        pointValue: '200',
        options: ["What is Maryland?", "What is Delaware?", "What is Rhode Island?", "What is Vermont?"],
        correct: "What is Rhode Island?",
        category: 'geography'
    },
    {
        text: "The state in which the Mountain Mauna Kea is located",
        pointValue: '400',
        options: ["What is Colorado?", "What is South Carolina?", "What is Alaska?", "What is Hawaii?"],
        correct: "What is Hawaii?",
        category: 'geography'
    },
    {
        text: "The name of the deepest lake in the United States",
        pointValue: '600',
        options: ["What is Crater Lake?", "What is Lake Superior", "What is Lake Tahoe?", "What is Lake Pend Oreille?"],
        correct: "What is Crater Lake?",
        category: 'geography'
    },
    {
        text: "The state in which Mount Rushmore is located",
        pointValue: '800',
        options: ["What is Utah?", "What is Montana?", "What is South Dakota?", "What is Colorado?"],
        correct: "What is South Dakota?",
        category: 'geography'
    },
    {
        text: "The number of US states that are landlocked",
        pointValue: '1000',
        options: ["What is 23?", "What is 29?", "What is 12?", "What is 16?"],
        correct: "What is 16?",
        category: 'geography'
    },
    { // category 5 - Playing Cards
        text: "The name of the poker hand when a player has 5 cards of the same suit",
        pointValue: '200',
        options: ["What is 5 of a kind?", "What is a full house?", "What is a flush?", "What is 5 pair?"],
        correct: "What is a flush?",
        category: 'cards'
    },
    {
        text: "This is the name of a famous playing card production company",
        pointValue: '400',
        options: ["What is Bicycle?", "What is Jokers Wild?", "What is Jameson Inc.?", "What is Ace?"],
        correct: "What is Bicycle?",
        category: 'cards'
    },
    {
        text: "The name for the initial bet placed by all players at the begining of a hand before any cards are dealt",
        pointValue: '600',
        options: ["What is the tax?", "What is the ante?", "What is the round?", "What is the blind?"],
        correct: "What is the ante?",
        category: 'cards'
    },
    {
        text: "A form of poker dealt with 2 cards down - 4 cards up - and then 1 card down",
        pointValue: '800',
        options: ["What is Razz?", "What is pass the Queen?", "What is Texas Holdem?", "What is Badugi?"],
        correct: "What is Razz?",
        category: 'cards'
    },
    {
        text: "Famous poker player that made a miraculous 1 chip comeback to win the World Series of Poker inspiring the phrase - A chip and a chair",
        pointValue: '1000',
        options: ["Who is Stu Ungar?", "Who is Amarillo Slim?", "Who is Doyle Brunson?", "Who is Jack Straus?"],
        correct: "Who is Jack Straus?",
        category: 'cards'
    },
    { // Category 6 - Alcohol
        text: "The main ingredient used to flavor beers",
        pointValue: '200',
        options: ["What are hops?", "What is salt?", "What are bitters?", "What is vinegar?"],
        correct: "What are hops?",
        category: 'alcohol'
    },
    {
        text: "Tequila is created mainly using this",
        pointValue: '400',
        options: ["What is pineapple?", "What is guava?", "What is agave", "What are berries"],
        correct: "What is agave?",
        category: 'alcohol'
    },
    {
        text: "All bourbon is this but not all of this is bourbon",
        pointValue: '600',
        options: ["What is rum?", "What is whiskey?", "What is scotch?", "What is brandy?"],
        correct: "What is whiskey?",
        category: 'alcohol'
    },
    {
        text: "The earliest evidence of alcohol production dates back to this age",
        pointValue: '800',
        options: ["What is the bronze age?", "What is the iron age?", "What is the copper age?", "What is the stone age?"],
        correct: "What is the stone age?",
        category: 'alcohol'
    },
    {
        text: "The year that beer was first sold in cans",
        pointValue: '1000',
        options: ["What is 1935?", "What is 1940?", "What is 1945?", "What is 1950?"],
        correct: "What is 1935?",
        category: 'alcohol'
    }
]

// Create a modal that displays when a user clicks a square that populates with information from that square's question. Change the background color of the modal to green if a user selects the correct answer (after submit). Change the background color to red if they select the incorrect answer (after submit). 

// Create a function that adds the point value of the square clicked to the score if a user submits the correct answer.

// Create a function that subtracts the point value of the square clicked from the score if the user submits an incorrect asnwer.

// Create a function that makes each square disappear after the answer has been submitted.

// Create a reset button that resets the board back to the setup at the beginning of the game when clicked by the user.

// Create an element that displays the name the user input at the bottom of the game board. - Player Name: "input"

// Create a function that displays an alert - or modal - to let the play know that they have won the game when they reach a certain number of points.

// Create a function that displays an alert - or modal - to let the play know that they have lost the game when they have answered all the questions and don't have more than the winning total.

