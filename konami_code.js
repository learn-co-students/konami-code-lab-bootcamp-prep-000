const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {

  // your code here
  document.addEventListener("keydown",function(e){
    let key = parseInt(e.detail || e.which)

    if (key === code[index]){

      if (index === code.length - 1){
        alert("Konami Code!")
        index = 0
      }
      index++
    } else {
      index = 0
    }
  })
}
