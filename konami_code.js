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
var counter = 0;
function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', function(e){
    const key = e.key;
    //console.log(key);
    if (key === codes[counter]){
      counter = counter + 1;
      if(counter === codes.length){
        alert("Haduka!");
        counter = 0;
      }
    } else {
      counter = 0;
    }
  });
  
}
