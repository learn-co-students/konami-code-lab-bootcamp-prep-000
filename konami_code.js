const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


// Initialize user input and fidelity counter
let userInput = "";
let fidelity = 0;

document.body.addEventListener('keydown', function konamiCode(press) {
    // Assign inputted value to var
    userInput = (press.key);

    // Check user input for fidelity against Konami code
    if (codes[fidelity] === userInput) {
        fidelity++;
    } else if (codes[fidelity] !== userInput) {
        fidelity = 0;
        userInput = "";
    }

    // Check fidelity count of array comparison and alert the user if successful
    if (fidelity === codes.length) {
        alert("You are the Konami Master of legend!");
    }
  });
