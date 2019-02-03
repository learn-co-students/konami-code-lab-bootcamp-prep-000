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
  const body = document.body
  var index = 0
  body.addEventListener('keydown', function(e) {
    if(e.key === codes[index]){
      window.alert("Hurray!");
      index++
      console.log(index)
      console.log(e.key)
      if(index === codes.length){
        console.log(index)
        window.alert("Hurray!");
        index = 0
      }
    } else {
      index = 0
    }
  });
}