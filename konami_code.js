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

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
   var index = 0;
   var userEntry = []
   
   function compare2Arrays(array1, array2){
     if(array1.length !== array2.length){
       return false
     }
     for(var i = 0; i < array1.length; i++){
       if(array1[i] !== array2[i]){
         return false
       }
     }
     return true
   }

document.body.addEventListener('keydown', function (e) {
     const key = e.key;      // parseInt(e.detail || e.which);
      userEntry.push(key)
     if(compare2Arrays(userEntry,codes)){
       alert('YOU DID IT!')
     }
   });
 }		 