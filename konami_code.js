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
  var index=0;
  document.body.addEventListener('keydown', function(e){
    if (index < codes.length){
      var key = e.key
      if (key===codes[index]){
       index++;
       console.log(key)
      }
    }
    if (index === codes.length){
      alert("You got the Konami code!")
      index =0
    }
  })
}