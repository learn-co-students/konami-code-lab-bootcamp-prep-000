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

//create counter
let index = 0;

function kCheck(e) {
  //store key press in variable
  let key = e.key;
  //check for Konami code
  if (key === codes[index]){
    //advance to next character
    index++;
    //if all code characters have been entered
    if (index === codes.length){
      alert(`Congratulations!`);
      index = 0;
    }
  }
  else {
    index = 0;
  }
}

function init() {
  document.body.addEventListener('keydown', kCheck);
}
