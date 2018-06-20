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
  document.body.addEventListener('keydown', function(e) {
    var len = codes.length
    if( codes[index%len] == e.key ){
      if( index%len == len-1)
        alert(e.key)
      index++;
    }else
      index = 0;
    
  })
}
