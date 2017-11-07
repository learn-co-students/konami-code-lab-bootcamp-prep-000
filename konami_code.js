const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
function init() {
  // Write your JavaScript code inside the init() function

    document.body.addEventListener('keydown', function(e){
      let keyValue = parseInt(e.which || e.detail)

      if (keyValue=== code[index]){
          index++

          if (index === code.length){
            alert("you got the konami code")
            index = 0
        }
      } else {

        index = 0
      }
  })
}
