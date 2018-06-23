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

  document.body.addEventListener('keydown',function(e){
  var key = parseInt(e.which || e.detail)

  var index=0

      if(key === codes[index]){
      index++


      if(index === code.length){
       konami()
       index=0
     }
  }
     else{
       console.log(e.which)
       nope()
       index=0
     }





  // var doc = document.getElementsByTagName('body')
//   var newcode = []
//   doc.addEventListener('keydown', function(e) {
//   // function onKeyDownHandler(e){
//     const key = e.keyCode
//     newcode.push(key)
//     console.log(key)
//     if (newcode.length == codes.length){
//       if(newcode == codes){
//         konami()
//       }
//       else {
//         nope()
//         newcode.length = 0
//       }
//     }else {
//       nope()
//       newcode.length = 0
//     }
//
//   // if (e.which === 71) {
//   //   return e.preventDefault()
//   }
// })

}
init()
