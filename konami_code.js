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

function init(e) {
  let index = 0;
  var final = document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Congratulations! You've performed the Konami Code!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
  return final;
}
