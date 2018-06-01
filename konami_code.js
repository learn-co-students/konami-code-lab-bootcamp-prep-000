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

let userInput = [];

document.body.addEventListener('keydown', function konamiCode(press) {
    // Initialize input array and fidelity counter
    userInput.push(press.key);
    let fidelity = 0;

    // Check user input for fidelity against Konami code
    if (codes.length === userInput.length) {
      for (let i = 0; i < codes.length; i++) {
        if (codes[i] === userInput[i]) {
            fidelity++;
        } else if (codes[i] !== userInput[i]) {
            fidelity = 0;
            codes.shift();
            break;
        }
      }
    }
    // Check fidelity count of array comparison and alert the user if successful
    if (fidelity === codes.length) {
        alert("You are the Konami Master of legend!");
    }
  });
