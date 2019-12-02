// jeoprady blue hex - #060CE9
console.log('this is a test')

// Pseudocode

// Create a heading - This... Is Jeoprady   or just use the Jeoprady logo

// Create a paragraph containing the instructions for the game.

// Create a play button that takes the user to the game board when clicked.

// Bonus - create an input field for the user to type in their name to displayed under the game board.

// Using javascript - create the game board (6x6) with categories listed on the top row and point values displayed in the squares underneath.

for (let i = 0; i < 36; i++) {
    let board = document.createElement('div')
    document.body.appendChild(board).classList.add('box') //create 36 divs - use if statement to add text and classes
}
// Create a global variable to track the players score, set it equal to zero. Points will be added to or subtracted from this varibale as the user answers questions. 
let score = 0;
// Questions problem - how to store information about each question (text of question, choices for answers, point value, correct answers)
// Seperate these questions by category
// create a variable called questions - set it equal to an array of objects - each object contains the information for each question.

let questions = [
    {
        text: "question1 text",
        pointValue: 200,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question2 text",
        pointValue: 400,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question3 text",
        pointValue: 600,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question4 text",
        pointValue: 800,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question5 text",
        pointValue: 1000,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question6 text",
        pointValue: 200,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question7 text",
        pointValue: 400,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question8 text",
        pointValue: 600,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question9 text",
        pointValue: 800,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question10 text",
        pointValue: 1000,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question11 text",
        pointValue: 200,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question12 text",
        pointValue: 400,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question13 text",
        pointValue: 600,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question14 text",
        pointValue: 800,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question15 text",
        pointValue: 1000,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question16 text",
        pointValue: 200,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question17 text",
        pointValue: 400,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question18 text",
        pointValue: 600,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question19 text",
        pointValue: 800,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question20 text",
        pointValue: 1000,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question21 text",
        pointValue: 200,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question22 text",
        pointValue: 400,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question23 text",
        pointValue: 600,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question24 text",
        pointValue: 800,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
    {
        text: "question25 text",
        pointValue: 1000,
        options: ["option1", "option2", "option3", "option4"],
        correct: "option2"
    },
]

// Create a modal that displays when a user clicks a square that populates with information from that square's question. Change the background color of the modal to green if a user selects the correct answer (after submit). Change the background color to red if they select the incorrect answer (after submit). 

// Create a function that adds the point value of the square clicked to the score if a user submits the correct answer.

// Create a function that subtracts the point value of the square clicked from the score if the user submits an incorrect asnwer.

// Create a function that makes each square disappear after the answer has been submitted.

// Create a reset button that resets the board back to the setup at the beginning of the game when clicked by the user.

// Create an element that displays the name the user input at the bottom of the game board. - Player Name: "input"

// Create a function that displays an alert - or modal - to let the play know that they have won the game when they reach a certain number of points.

// Create a function that displays an alert - or modal - to let the play know that they have lost the game when they have answered all the questions and don't have more than the winning total.

