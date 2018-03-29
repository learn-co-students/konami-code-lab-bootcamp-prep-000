const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0
function init() {
  // Write your JavaScript code inside the init() function

  document.body.addEventListener("keydown", function(e) { 
    const key = parseInt(e.keyCode || e.which || e.location)
    console.log(code)
    console.log("KeyPress: " + key)
  
    if (key === code[index]) {
      index++
      console.log("Index: " + index)
    
      if (index === (code.length)) {
        alert("Hurray!")
        index = 0
      }
    } else {
     index = 0
    }
}
)
}