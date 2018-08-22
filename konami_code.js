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
  var index = 0
  document.body.addEventListener('keydown' ,function(e){
    
    var x = e.key
    if (x===codes[index])
    {
      index += 1
      if(index === codes.length)
      {
        window.alert("Hurray!");
        index = 0
      }
    }
    else {
      index = 0
    }
  })

}


