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

function init() {
  // your code here
  var i = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[i]) {
      i++;
      if (i === codes.length) {
        alert('You did it!');
        index = 0;
      }
    }else {
      index =0;
    }
  });
}

