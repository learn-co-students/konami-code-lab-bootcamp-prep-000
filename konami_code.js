const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
var input = document.querySelector('body');
var i= 0;
input.addEventListener('keydown', function key(e){
  var key = parseInt(e.detail || e.which);
  
    if (key === code[code.length-1]){
      i=0
      alert("Yolo!")
    }else {
    if (key === code[i]){
      i++
      //console.log(key+" "+ i)
    }
      else {
    i=0
    //console.log(`err, wrong key ${key} and i ${i}`)
      }
        
    }
})
}

