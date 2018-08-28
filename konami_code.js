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
  var index = 0;
  document.addEventListener('keydown', Function (e) {
    var key = e.key;
    if (key === codes[index]){
      index++
      
      if (index === codes.length-1){
        alert('Secret Solved!')
        index = 0;
      }
      } else {
        index = 0
      }
})
}