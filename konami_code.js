
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//const code = [70,71,72];
var index = 0;



function init() {
    document.body.addEventListener('keydown', handler)

}



function handler(e){
  // your code here
  var key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

    if (index === code.length) {
      alert("YOU DID IT!")
      index = 0
    }
  }

  else {
//   alert('Wrong code entered')
    index = 0
  }
}

/*
function listener(){
  document.body.addEventListener('keydown', function(e) {
  // console.log(e.which);
  handler(e)
})
}*/

init()
