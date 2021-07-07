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
var i = 0;
  document.body.addEventListener('keydown', function(e) { 
    const key = e.key;
    console.log(e)
    
    console.log("block 1")
    if (key === codes[i]) {
      i++;
      console.log("Correct Code")
      if (i === codes.length){
        alert("Konami Code!");
        i = 0;
        console.log("block 3")
      }
    } else {
      i = 0;
      console.log("Wrong Key")
    }
  });
}