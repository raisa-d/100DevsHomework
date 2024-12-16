
class Game {
    constructor(currentTurn, winner) {
        this.turn = currentTurn
        this.winner = winner
        // variables for each slot
        this.slot1 = document.querySelector('.slot1');
        this.slot2 = document.querySelector('.slot2');
        this.slot3 = document.querySelector('.slot3');
        this.slot4 = document.querySelector('.slot4');
        this.slot5 = document.querySelector('.slot5');
        this.slot6 = document.querySelector('.slot6');
        this.slot7 = document.querySelector('.slot7');
        this.slot8 = document.querySelector('.slot8');
        this.slot9 = document.querySelector('.slot9');
    }

    playGame() {
        let gameRunning = true;
        // game loop runs while game is running
        while (gameRunning) {
            this.announceTurn();
            gameRunning = this.takeTurn();
        }
    }

    announceTurn() {
        document.querySelector('p').textContent = `It is ${this.turn}'s turn. Please select the square in which you want to place the ${this.turn}.`
    }

    announceWinner() {
        document.querySelector('p').textContent = `${this.winner} has won the game!`
        console.log(`${this.winner} has won the game!`);
        // *** TO DO: add styling for the winning combo (change the color or something) & disallow users from selecting more boxes to fill with their position
        let allSlots = document.querySelectorAll('.square');

        // add event listeners to each slot to listen for a click
        allSlots.forEach(slot => slot.removeEventListener('click', () => console.log('removed event listeners')))
    }

    takeTurn() {
        // create array of squares
        let allSlots = document.querySelectorAll('.square');

        // add event listeners to each slot to listen for a click
        allSlots.forEach(slot => slot.addEventListener('click', () => {
            // if the slot is not already chosen
            if (!slot.classList.contains('ex') && !slot.classList.contains('oh')) {

                // if it is X's turn, on the click add the X styling
                if (this.turn === 'X') {
                    slot.classList.add('ex');
                    slot.querySelector('.x-present').style.visibility = 'initial'

                    // switch turn from X to O
                    this.turn = 'O'
                    this.announceTurn();
                    return this.assessGameProgress()
                    // if it is O's turn, on the click add the O styling
                } else if (this.turn === 'O') {
                    slot.classList.add('oh');
                    // switch turn from O to X
                    this.turn = 'X'
                    this.announceTurn();
                    return this.assessGameProgress()
                }
            }
        }));
    }

    // assess whether there is a winner in each round
    assessGameProgress() {
        const winningCombos = [
            [this.slot1, this.slot2, this.slot3],
            [this.slot4, this.slot5, this.slot6],
            [this.slot7, this.slot8, this.slot9],
            [this.slot1, this.slot5, this.slot9],
            [this.slot3, this.slot5, this.slot7],
            [this.slot1, this.slot4, this.slot7],
            [this.slot2, this.slot5, this.slot8],
            [this.slot3, this.slot6, this.slot9]
        ]

        winningCombos.forEach(combo => {
            // if every slot in the current winning combo contains a class of ex, then X wins, we announce the winner, and return false for gameRunning
            if (combo.every(slot => slot.classList.contains('ex'))) {
                this.winner = 'X';
                this.announceWinner();
                return false;

                // if O wins, we do the same
            } else if (combo.every(slot => slot.classList.contains('oh'))) {
                this.winner = 'O';
                this.announceWinner();
                return false;
            } else {
                console.log('did not detect a winner for this round');
            }
        })
        // return false;
    }
}

// instantiate the ticTacToeGame
const ticTacToe = new Game('X');
ticTacToe.playGame()