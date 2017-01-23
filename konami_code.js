const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e){
    console.log(e.which)
  var key = parseInt(e.which || e.detail)

  if ( key === code[index]) {
    index++

    if (key === code.length - 1){
      alert("You have done it!")
      index = 0;
    }
  }
  else {
    index = 0;
  }
})
}
