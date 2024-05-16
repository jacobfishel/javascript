//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. Play again 


// variable prompt, require
const prompt = require("prompt-sync")();


const ROWS = 3;
const COLUMNS = 3; 

const SYMBOL_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8,
};

const SYMBOL_VALUE = {
    A : 5,
    B : 4,
    C : 3,
    D : 2,
};


const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        //parse float  turns the input into a float number
const numberDepositAmount = parseFloat(depositAmount);

if (isNaN(numberDepositAmount) || numberDepositAmount <=0) {
console.log("Invalid deposit amount, try again.");
} else {
    return numberDepositAmount;
}
    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the amount of lines to bet on (1-3): ");
        //parse float  turns the input into a float number
const numberOfLines = parseFloat(lines);

if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3) {
console.log("Invalid number of lines, try again.");
} else {
    return numberOfLines;
}
    }

}

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
        //parse float  turns the input into a float number
const betAmount = parseFloat(bet);

if (isNaN(betAmount) || betAmount <=0 || betAmount > balance / lines) {
console.log("Invalid bet amount, try again.");
} else {
    return betAmount;
}
    }
}

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLUMNS; i++) {
    const reelSymbols = [...symbols];
    for (let i = 0; i < ROWS; i++) {
  const randomIndex = math.floor(math.random() * reelSymbols.length());
  reels.push(reelSymbols[randomIndex]);
  reelSymbols.splice(reelSymbols[randomIndex]);
    }
  }
};


spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);