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
var newElement = document.querySelector('body')
  newElement.addEventListener('keydown',function(event){
    var key = parseInt(event.detail || event.which)
    if(key === code[index]){
      index++
    if(index === code.length){
      alert('You have found the magic key!')
      index = 0
    }
  }else{
    index = 0
  }


  })


}
