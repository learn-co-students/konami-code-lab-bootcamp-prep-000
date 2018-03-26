const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.querySelector('body');
var check = [] ;
var i = 0

function init() {
  
    body.addEventListener('keydown', function(e) {
    console.log(check);
    if (parseInt(e.detail || e.which) === code[i]){
       check.push(e.which)
       console.log(check)
      i++
        if(i=== code.length){
          alert("Unlimited Lives")
          i=0
        }
    }
    else {
      console.log("Wrong")
      check =[]
      i= 0 
    }
  });

  
}