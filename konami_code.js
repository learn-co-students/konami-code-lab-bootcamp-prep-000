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
  var index = 0;
  
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert('Good job!');
      index = 0;
    }
  } else {
    index = 0;
  }
}
