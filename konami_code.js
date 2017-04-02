const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
  var body = document.body
  body.addEventListener('keydown', onKeyDownHandler)
}


function onKeyDownHandler(e) {
   const key = parseInt(e.detail || e.which)

   if (key === code[index]){
     index ++

     if (index === code.length - 1){
       alert("YOU DID IT")
       index = 0
     }
   } else {
     index = 0
   }
}
//
