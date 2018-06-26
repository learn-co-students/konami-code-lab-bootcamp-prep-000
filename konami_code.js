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
var back = document.querySelector("body");
var thecode = []
back.addEventListener('keydown', function(event) {
   thecode.push(event.code)
  })
if (thecode.length == codes.length){
  //Checking for KeyA and KeyB
  for(var i = 0; i<thecode.length;i++){
    if (thecode[i]=="KeyA"){
      thecode[i] = "a"
    }else if (thecode[i]=="KeyB"){
      thecode[i] = "b"
    } else{
    }
  }//End of checking
//Check to see if the codes and codes match
  if (thecode == codes){
    konami()
    thecode.length = 0
  } else {
    nope()
    thecode.length = 0
  }
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
