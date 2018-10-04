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


document.body.addEventListener('keydown', function(event) {
  var index = 0;
  
  const key = event.which;
  
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert('Good job!');
      index = 0;
    }
  } else {
    index = 0;
  }
});