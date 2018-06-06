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

var i = 0;

function init(e) {
  var key = e.key;
  console.log(key);
  if(key === codes[i]){
    i++;
    if(i === codes.length){
      alert("Well Done!");
      i = 0;
    } 
  } else {
    i = 0;
  }
  console.log(i);
}

document.body.addEventListener('keydown', init);

