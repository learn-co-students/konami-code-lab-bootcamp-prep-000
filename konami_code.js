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


var index = 0
const body = document.querySelector('body')
body.addEventListener ('keydown', function(e) {
  var key = e.key;
  if (key === codes[index]) {
    index +=1;
    console.log(index);
    if (index === codes.length) {
      alert('Congrats');
      index = 0;
    }
  }
  else {
    index = 0;
  }
})
