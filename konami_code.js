const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// This is the method I thought of on my own before reading the lesson
// code example. The lesson example is more succinct, but I thought I
// should try implementing both, as mine is different enough to serve
// in other use cases.

let last10 = []

function keyHist(keyPress) {
  if (last10.length === 10) {
    last10.shift();
  };

  last10.push(parseInt(keyPress.detail || keyPress.which));

  if (last10.toString() === code.toString()) {
    alert("heheh, lel");
  };
}

function init() {
  document.body.addEventListener('keydown', keyHist);
}

init()

/* COURSE-GUIDED METHOD

let ind = 0;

function keyTracker(keyPress) {
  const lastKey = parseInt(keyPress.detail || keyPress.which);
  if (lastKey === code[ind]) {
    ind++;
    if (ind === code.length) {
      alert("heheh, lol");
    }
  } else {
      ind = 0;
    }
  }

function init() {
  document.body.addEventListener('keydown', keyTracker);
}

init();

*/
