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
  var score = 0
  document.body.addEventListener('keydown', function(e) {
  if (e.key === codes[score] ) {
    score = score + 1;
    if(score === 10){
      alert('Congrats!');
    }
  } else if (e.key === "ArrowUp" ) {
    score = 1;
  } else{
    score = 0;
  }
});
}
