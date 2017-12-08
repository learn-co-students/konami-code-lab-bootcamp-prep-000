const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const inputs = document.querySelector('input')
let index = 0;
//function for the event listener
function init() {
  const key = parseInt(inputs[index].detail || inputs[index].which);
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

inputs.addEventListener("keydown", init())
