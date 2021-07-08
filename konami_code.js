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

var index = 0;

function init() {
  // your code here
document.body.addEventListener('keydown', function(e) {

    var keyName = e.key;
    // console.log(e.key);
    if(keyName === codes[index]) {
      index++;
  
    if(index === codes.length) {
      alert("Congratulations - UNLOCKED");
      index = 0;
    } 

  } else {
    index = 0;
  }

  
})


}






