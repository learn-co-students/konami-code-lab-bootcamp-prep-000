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
function konami(){
  window.alert('congratulatory message')
}

function nope(){
  window.alert('nope message')
}

function init() {
  // your code here
  var doc = document.getElementsByTagName('body')
  var newcode = []
  doc.addEventListener('keydown', function(e) {
  // function onKeyDownHandler(e){
    const key = e.keyCode
    newcode.push(key)
    console.log(key)
    if (newcode.length == codes.length){
      if(newcode == codes){
        konami()
      }
      else {
        nope()
        newcode.length = 0
      }
    }else {
      nope()
      newcode.length = 0
    }

  // if (e.which === 71) {
  //   return e.preventDefault()
  }
})

}
