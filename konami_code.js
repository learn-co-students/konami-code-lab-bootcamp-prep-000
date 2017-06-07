const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  // your code here
  const input = document.querySelector('body');
  // input.addEventListener('keydown', function(e));
  input.addEventListener('keydown', surprise);
}

function surprise(e) {
  const key = parseInt(e.detail | e.which);

  if(key === code[index]) {
    console.log("Watch out!");
    index++;

    if (index === code.length) {
      alert("POP");
      index = 0;
    }
  } else {
    index = 0;
  }

}
