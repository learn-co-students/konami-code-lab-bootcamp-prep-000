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
var i = 1

function checkSequence(codes,i){
  m.addEventListener('keydown',function(e){
    if (e.key == codes[i] && i < codes.length-1){
      checkSequence(codes,i=i+1)
    } else if (e.key == codes[i] && i == codes.length-1){
      alert('Congratulations')
    } else {
      init()
    }


  })
}

function init() {
  const m = document.getElementsByTagName('body')

  m.addEventListener('keydown',function(e) {
    if (e.key == codes[0]){
      checkSequence(codes,i)
    }
  })

}

puts init()
