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
  var body = document.querySelector(body)
  
  body.addEventListener('keyDown', function(e){
    var k = e.k;
    
    if(k === codes[index]){
      index++;
      if(index === codes.length){
        console.log("Congratulations, WUJUUU!!!")
        index = 0;
      }
    }
    else{
      index = 0;
    }
  })
}
