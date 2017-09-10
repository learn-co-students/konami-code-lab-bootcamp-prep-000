const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index=0

function init() {
  // Write your JavaScript code inside the init() function
 document.body.addEventListener('keydown', function (key){
   console.log(key.detail)
   if (parseInt(key.detail)===code[index]){
     index++
     if (index===code.length) {
       alert("Congratulation!")
     }
   }else {index=0}
 })
}
