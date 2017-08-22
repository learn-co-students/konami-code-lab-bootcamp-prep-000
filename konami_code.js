const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')
var index = 0
function init() {
  //body.addEventListener("click", function(){ alert("Hello World!"); })
  // Write your JavaScript code inside the init() function
/*  body.addEventListener("keydown", function(e) {
  console.log(e.which)
  if (parseInt(e.which) === 38) {
    console.log("got here")
  }
})*/
body.addEventListener("keydown", function(e) {
  //console.log('key pressed is' + e.which)
  const key = parseInt(e.detail || e.which)
  if (key !== code[index]) {
    index = 0
    //console.log("code restart")
  }
  if (key === code[index]) {
    index++;
  //  console.log("entering code")
    //console.log("index at " + index)
  } if (index === code.length) {
    alert("KONAMIIIIII")
  }
})

}

/*keyDownFunction(e) {

  var keyCode = e.keyCode
  console.log(keyCode)
  //if(keyCode === 38) {
    //console.log("You hit up")
  //}
}


function fooBar() {
  console.log("foobar")
}*/
