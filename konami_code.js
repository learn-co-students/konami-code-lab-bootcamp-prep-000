const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
  document.body.addEventListener("keydown", function(e) { 
  const key = (e.keyCode || e.which || e.location)
  console.log(code)
  console.log("KeyPress: " + parseInt(key))
  
  if (key === code[index]) {
    console.log("Index: " + index)
    
    if (index === (code.length - 1)) {
      window.alert("Hurray!")
      index = 0
    }
    index++
  } else {
    index = 0
  }
})
}
