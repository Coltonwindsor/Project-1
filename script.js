// Pseudocode

// Create a heading - This... Is Jeoprady   or just use the Jeoprady logo

// Create a paragraph containing the instructions for the game.

// Create a play button that takes the user to the game board when clicked.

// Bonus - create an input field for the user to type in their name to displayed under the game board.

// Using javascript - create the game board (6x6) with categories listed on the top row and point values displayed in the squares underneath.

let questions = [
    {
        text: "The color Christmas Elvis is will have without you.",
        pointValue: '200',
        options: ["What is red?", "What is blue?", "What is green?", "What is white?"],
        correct: "What is blue?",
        category: 'Christmas'
    },
    {
        text: "This holiday drink is also known as milk punch",
        pointValue: '400',
        options: ["What is a White Russian?", "What is Mulled Wine", "What is eggnog?", "What is hot chocolate?"],
        correct: "What is eggnog?",
        category: 'Christmas'
    },
    {
        text: "The number of ghosts that appear in A Christmas Carol",
        pointValue: '600',
        options: ["What is 2?", "What is 3?", "What is 4?", "What is 5?"],
        correct: "What is 4?",
        category: 'Christmas'
    },
    {
        text: "The only present Ralphie asks for in A Christmas Story",
        pointValue: '800',
        options: ["What is a fire truck?", "What is a pet rock?", "What is a BB gun?", "What is an action figure?"],
        correct: "What is a BB gun?",
        category: 'Christmas'
    },
    {
        text: "The country that began the traditon of putting up a Christmas tree",
        pointValue: '1000',
        options: ["What is Germany?", "What is the United States?", "What is Austria?", "What is Lebanon?"],
        correct: "What is Germany?",
        category: 'Christmas'
    },
    {
        text: "The tool used to strike the ball in Tennis",
        pointValue: '200',
        options: ["What is a paddel?", "What is a racket?", "What is a club?", "What is the hand?"],
        correct: "What is a racket?",
        category: 'Sports'
    },
    {
        text: "The only NFL team that is publically owned",
        pointValue: '400',
        options: ["Who are the Tampa Bay Buccaneers?", "Who are the Dalas Cowboys?", "Who are the Green Bay Packers?", "Who are The Atlanta Falcons?"],
        correct: "Who are the Green Bay Packers?",
        category: 'Sports'
    },
    {
        text: "The winningest coach in NFL history",
        pointValue: '600',
        options: ["Who is Dan Reeves?", "Who is Bill Belichick?", "Who is Tom Landry?", "Who is Don Shula?"],
        correct: "Who is Don Shula?",
        category: 'Sports'
    },
    {
        text: "Famous golfer nicknamed The Golden Bear",
        pointValue: '800',
        options: ["Who is Jack Nicklaus?", "Who is Arnold Palmer?", "Who is Gary Player?", "Who is Tom Watson?"],
        correct: "Who is Jack Nicklaus?",
        category: 'Sports'
    },
    {
        text: "This NBA player went on to become mayor of Sacramento, California",
        pointValue: '1000',
        options: ["Who is Clyde Drexler?", "Who is Karl Malone?", "Who is Reggie Miller?", "Who is Kevin Johnson?"],
        correct: "Who is Kevin Johnson?",
        category: 'Sports'
    },
    {
        text: "Disney's 3D animation company",
        pointValue: '200',
        options: ["What is Dreamworks?", "What is Pixar?", "What is Blue Sky Studio?", "What is Imagination Engine?"],
        correct: "What is Pixar?",
        category: 'Movies'
    },
    {
        text: "The title of the second Indiana Jones movie - Released in 1984",
        pointValue: '400',
        options: ["What is Indiana Jones and the Temple of Doom?", "What is Indiana Jones and the Raiders of Lost Arc?", "What is Indiana Jones and the Fountain of Youth?", "What is Indiana Jones and the Next Crusade?"],
        correct: "What is Indiana Jones and the Temple of Doom?",
        category: 'Movies'
    },
    {
        text: "This actress plays Katniss Everdeen in the Hunger Games movies",
        pointValue: '600',
        options: ["Who is Kate Winslet?", "Who is Jennifer Lawrence?", "Who is Scarlett Johansson?", "Who is Ellen Page?"],
        correct: "Who is Scarlett Johansson?",
        category: 'Movies'
    },
    {
        text: "Directed the epic historical drama Schindler's List in 1993",
        pointValue: '800',
        options: ["Who is Martin Scorsese?", "Who is Steven Spielberg?", "Who is Francis Ford Coppola?", "Who is Stanley Kubrick?"],
        correct: "Who is Steven Spielberg?",
        category: 'Movies'
    },
    {
        text: "This was first year the Oscars were presented",
        pointValue: '1000',
        options: ["What is 1951?", "What is 1929?", "What is 1967?", "What is 1936?"],
        correct: "What is 1929?",
        category: 'Movies'
    },
    {
        text: "The smallest state in the United States",
        pointValue: '200',
        options: ["What is Maryland?", "What is Delaware?", "What is Rhode Island?", "What is Vermont?"],
        correct: "What is Rhode Island?",
        category: 'Geography'
    },
    {
        text: "The state in which the Mountain Mauna Kea is located",
        pointValue: '400',
        options: ["What is Colorado?", "What is South Carolina?", "What is Alaska?", "What is Hawaii?"],
        correct: "What is Hawaii?",
        category: 'Geography'
    },
    {
        text: "The name of the deepest lake in the United States",
        pointValue: '600',
        options: ["What is Crater Lake?", "What is Lake Superior", "What is Lake Tahoe?", "What is Lake Pend Oreille?"],
        correct: "What is Crater Lake?",
        category: 'Geography'
    },
    {
        text: "The state in which Mount Rushmore is located",
        pointValue: '800',
        options: ["What is Utah?", "What is Montana?", "What is South Dakota?", "What is Colorado?"],
        correct: "What is South Dakota?",
        category: 'Geography'
    },
    {
        text: "The number of US states that are landlocked",
        pointValue: '1000',
        options: ["What is 23?", "What is 29?", "What is 12?", "What is 16?"],
        correct: "What is 16?",
        category: 'Geography'
    },
    {
        text: "The name of the poker hand when a player has 5 cards of the same suit",
        pointValue: '200',
        options: ["What is 5 of a kind?", "What is a full house?", "What is a flush?", "What is 5 pair?"],
        correct: "What is a flush?",
        category: 'Cards'
    },
    {
        text: "This is the name of a famous playing card production company",
        pointValue: '400',
        options: ["What is Bicycle?", "What is Jokers Wild?", "What is Jameson Inc.?", "What is Ace?"],
        correct: "What is Bicycle?",
        category: 'Cards'
    },
    {
        text: "The name for the initial bet placed by all players at the begining of a hand before any cards are dealt",
        pointValue: '600',
        options: ["What is the tax?", "What is the ante?", "What is the round?", "What is the blind?"],
        correct: "What is the ante?",
        category: 'Cards'
    },
    {
        text: "A form of poker dealt with 2 cards down - 4 cards up - and then 1 card down",
        pointValue: '800',
        options: ["What is Razz?", "What is pass the Queen?", "What is Texas Holdem?", "What is Badugi?"],
        correct: "What is Razz?",
        category: 'Cards'
    },
    {
        text: "Famous poker player that made a miraculous 1 chip comeback to win the World Series of Poker inspiring the phrase - A chip and a chair",
        pointValue: '1000',
        options: ["Who is Stu Ungar?", "Who is Amarillo Slim?", "Who is Doyle Brunson?", "Who is Jack Straus?"],
        correct: "Who is Jack Straus?",
        category: 'Cards'
    },
    {
        text: "The main ingredient used to flavor beers",
        pointValue: '200',
        options: ["What are hops?", "What is salt?", "What are bitters?", "What is vinegar?"],
        correct: "What are hops?",
        category: 'Alcohol'
    },
    {
        text: "Tequila is created mainly using this",
        pointValue: '400',
        options: ["What is pineapple?", "What is guava?", "What is agave?", "What are berries?"],
        correct: "What is agave?",
        category: 'Alcohol'
    },
    {
        text: "All bourbon is this but not all of this is bourbon",
        pointValue: '600',
        options: ["What is rum?", "What is whiskey?", "What is scotch?", "What is brandy?"],
        correct: "What is whiskey?",
        category: 'Alcohol'
    },
    {
        text: "The earliest evidence of alcohol production dates back to this age",
        pointValue: '800',
        options: ["What is the bronze age?", "What is the iron age?", "What is the copper age?", "What is the stone age?"],
        correct: "What is the stone age?",
        category: 'Alcohol'
    },
    {
        text: "The year that beer was first sold in cans",
        pointValue: '1000',
        options: ["What is 1935?", "What is 1940?", "What is 1945?", "What is 1950?"],
        correct: "What is 1935?",
        category: 'Alcohol'
    }
]

function createBoard() {
    let categories = ['Christmas', 'Movies', 'Sports', 'Geography', 'Cards', 'Alcohol']

    for (let i = 0; i < 36; i++) {
        let board = document.createElement('div')
        if (i <= 5 && i >= 0) {
            board.textContent = categories[i]
            board.classList.add('category')
        } else if (i > 5 && i <= 11) {
            board.textContent = '200';
            board.classList.add('question')
            board.setAttribute('data-points', '200')
            board.setAttribute('data-target', '#exampleModal')
            board.setAttribute('data-toggle', 'modal')
        } else if (i > 11 && i <= 17) {
            board.textContent = '400'
            board.classList.add('question')
            board.setAttribute('data-points', '400')
            board.setAttribute('data-target', '#exampleModal')
            board.setAttribute('data-toggle', 'modal')
        } else if (i > 17 && i <= 23) {
            board.textContent = '600'
            board.classList.add('question')
            board.setAttribute('data-points', '600')
            board.setAttribute('data-target', '#exampleModal')
            board.setAttribute('data-toggle', 'modal')
        } else if (i > 23 && i <= 29) {
            board.textContent = '800'
            board.classList.add('question')
            board.setAttribute('data-points', '800')
            board.setAttribute('data-target', '#exampleModal')
            board.setAttribute('data-toggle', 'modal')
        } else if (i > 29 && i <= 35) {
            board.textContent = '1000'
            board.classList.add('question')
            board.setAttribute('data-points', '1000')
            board.setAttribute('data-target', '#exampleModal')
            board.setAttribute('data-toggle', 'modal')
        }
        if (i === 6 || i === 12 || i === 18 || i === 24 || i === 30) {
            board.setAttribute('data-category', 'Christmas')
        } else if (i === 7 || i === 13 || i === 19 || i === 25 || i === 31) {
            board.setAttribute('data-category', 'Movies')
        } else if (i === 8 || i === 14 || i === 20 || i === 26 || i === 32) {
            board.setAttribute('data-category', 'Sports')
        } else if (i === 9 || i === 15 || i === 21 || i === 27 || i === 33) {
            board.setAttribute('data-category', 'Geography')
        } else if (i === 10 || i === 16 || i === 22 || i === 28 || i === 34) {
            board.setAttribute('data-category', 'Cards')
        } else if (i === 11 || i === 17 || i === 23 || i === 29 || i === 35) {
            board.setAttribute('data-category', 'Alcohol')
        }

        document.querySelector('main').appendChild(board).classList.add('box')

        board.addEventListener('click', function () {
            for (let i = 0; i < questions.length; i++) {
                if (questions[i].category === this.dataset.category && questions[i].pointValue === this.dataset.points) {
                    let catPointPair = document.querySelector('.modal-title')
                    let questionText = document.querySelector('.modal-question')
                    let answer1 = document.querySelector("[data-answer='1']")
                    let answer2 = document.querySelector("[data-answer='2']")
                    let answer3 = document.querySelector("[data-answer='3']")
                    let answer4 = document.querySelector("[data-answer='4']")

                    questionText.textContent = questions[i].text;
                    catPointPair.textContent = `${questions[i].category} - ${questions[i].pointValue}`
                    answer1.textContent = questions[i].options[0]
                    answer2.textContent = questions[i].options[1]
                    answer3.textContent = questions[i].options[2]
                    answer4.textContent = questions[i].options[3]
                    this.classList.add('invisible')
                }
            }
        })
    }
}
function playerName() {
    let newPlayer = document.querySelector('input').value
    let player = document.querySelector('.player')
    player.textContent = "Player: " + newPlayer
}

function hideInstructions() {
    document.querySelector('.hideMe').classList.add('hidden')
}

document.querySelector('.beginButton').addEventListener('click', function () {
    hideInstructions();
    createBoard();
    showFooter();
    playerName();
})

document.querySelector('.hideMeToo').classList.add('invisible')
function showFooter() {
    document.querySelector('.hideMeToo').classList.remove('invisible')
}

document.querySelector('.resetButton').addEventListener('click', function () {
    location.reload();
})

document.querySelector('.btn-primary').setAttribute('data-dismiss', "modal")

let count = 0;

document.querySelector('.btn-primary').addEventListener('click', function (evt) {

    let checkedValue = document.querySelector('input[name="exampleRadios"]:checked').nextElementSibling.textContent
    let score = document.querySelector('.score')
    let test = document.querySelector('.modal-question')
    let invisibleBox = document.querySelectorAll('.invisible')
    let correctSound = document.querySelector('.correctSound')
    let incorrectSound = document.querySelector('.incorrectSound')

    for (let i = 0; i < questions.length; i++) {
        if (test.textContent === questions[i].text) {
            if (checkedValue === questions[i].correct) {
                count += parseInt(questions[i].pointValue)
                score.textContent = count
                correctSound.play();
            } else if (checkedValue !== questions[i].correct) {
                count -= parseInt(questions[i].pointValue)
                score.textContent = count
                incorrectSound.play();
                break
            }
        }
    }
    if (count >= 7000) {
        alert('You Win!')
        return null
    } else if (count < 7000 && invisibleBox.length === 30) {
        alert('Sorry, you lose - press reset to play again!')
        return null
    }
})


// Create a global variable to track the players score, set it equal to zero. Points will be added to or subtracted from this varibale as the user answers questions.

// Questions problem - how to store information about each question (text of question, choices for answers, point value, correct answers)
// Seperate these questions by category
// create a variable called questions - set it equal to an array of objects - each object contains the information for each question.


// Create a modal that displays when a user clicks a square that populates with information from that square's question. Change the background color of the modal to green if a user selects the correct answer (after submit). Change the background color to red if they select the incorrect answer (after submit). 

// Create a function that adds the point value of the square clicked to the score if a user submits the correct answer.

// Create a function that subtracts the point value of the square clicked from the score if the user submits an incorrect asnwer.

// Create a function that makes each square disappear after the answer has been submitted.

// Create a reset button that resets the board back to the setup at the beginning of the game when clicked by the user.

// Create an element that displays the name the user input at the bottom of the game board. - Player Name: "input"

// Create a function that displays an alert - or modal - to let the play know that they have won the game when they reach a certain number of points.

// Create a function that displays an alert - or modal - to let the play know that they have lost the game when they have answered all the questions and don't have more than the winning total.

