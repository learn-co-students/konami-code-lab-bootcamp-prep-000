




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

// below added by Mike
alert('Hello Big Mike from konami_code.js');

function init() {
  // your code here
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (codes[index] === key) {
      index = index + 1;
    } else {
      index = 0;
    }
    if (index === codes.length) {
      window.alert('You da man for entering the Konami sequence properly');
      index = 0;
    }
  });
}
