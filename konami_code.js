const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.querySelector('body');
let index = 0;

function init() {
  body.addEventListener("keydown", onKeyDownHandler);

  // Used for debugging
  // console.log("Event Listener Started");
}

function onKeyDownHandler(e) {
  const key = parseInt(e.location || e.detail);
  // Used for debugging
  // console.log(`${key} pressed`);
  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("You've just entered the Konami code!");

      index = 0;
    }
  } else {
    index = 0;
  }

}

init();
