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
  var index = 0
  document.body.addEventListener('keydown', function(e){
    var key = parseInt(e.detail || e.which)
    if(key === code[index]){
      index++;
      if(index === code.length-1){
        alert("Congrats! You cracked the code.")
        index = 0
      }
    } else {
      index = 0
    }
  })
}
