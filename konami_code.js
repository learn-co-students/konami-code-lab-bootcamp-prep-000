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
var back = document.querySelector("body")
var thecode = []
var truth = 0
function konami(){
  window.alert('congratulatory message')
}

function nope(){
  window.alert('nope message')
}






function init() {
  // your code here
back.addEventListener('keydown', function(event) {
   thecode.push(event.code)

   if (thecode.length == 10){
     //Checking for KeyA and KeyB
     for(var i = 0; i<thecode.length;i++){
       if (thecode[i]=="KeyA"){
         thecode[i] = "a"
       }else if (thecode[i]=="KeyB"){
         thecode[i] = "b"
       } else{
         console.log("otherchar")
       }//End of checking
     }
     //Checking for right code
     for (var i = 0; i<thecode.length;i++){
       if (thecode[i]==codes[i]){
     	truth = truth+ 1
       }else {
         console.log (codes[i]+" is false")
       }
     }
     //end of checking for truth
     if(truth == 10){
       konami()
       thecode.length = 0
       truth = 0
     }else {
       thecode.length = 0
       truth = 0
     }
  })
//end of addEventListener
}//end of init()
}
init()
