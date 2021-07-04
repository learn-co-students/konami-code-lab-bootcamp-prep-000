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
  const body = document.querySelector('body')

  body.addEventListener('keydown', function(e){
    console.log("apretaste una tecla")
    var k = e.key;
    
    if(k === codes[index]){
      index++;
      if(index === codes.length){
        console.log("Congratulations, WUJUUU!!!")
        index = 0;
      }
    }
    else{
      console.log('index a 0')
      index = 0;
    }
  })
}
