// Yahtzee Dice Roller
// Rolls five six-sided dice, displays each result, and keeps a running total.

const NUM_DICE = 5;
const SIDES = 6;

let rollCount = 0;

/**
 * Returns a random integer between 1 and SIDES (inclusive),
 * simulating a single roll of a six-sided die.
 */
function rollSingleDie() {
  return Math.floor(Math.random() * SIDES) + 1;
}

/**
 * Rolls all five dice, writes each result into its read-only field,
 * updates the total field, and increments the roll counter.
 */
function rollAllDice() {
  let total = 0;

  for (let i = 1; i <= NUM_DICE; i++) {
    const value = rollSingleDie();
    total += value;

    const field = document.getElementById('die' + i);
    if (field) {
      field.value = value;
    }
  }

  const totalField = document.getElementById('total');
  if (totalField) {
    totalField.value = total;
  }

  rollCount++;
  const counter = document.getElementById('rollCount');
  if (counter) {
    counter.textContent = 'Rolls this turn: ' + rollCount;
  }
}
