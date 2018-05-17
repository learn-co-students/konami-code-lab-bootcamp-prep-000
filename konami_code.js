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
  var index = 0;
  
  function onKeyDownHandler(e) {
    var key = e.key;
    console.log(key);
    if (key === codes[index]) {
      index++
      if (index === codes.length) {
        alert("Congratulations!!!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  
  document.body.addEventListener('keydown', onKeyDownHandler)
}
