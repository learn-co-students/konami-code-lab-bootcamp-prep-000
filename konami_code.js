const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
  document.body.addEventListener("keydown", function(e) {
    var key = parseInt(e.which || e.detail)


      if ( key == code[index]) {
        console.log(index)
        index ++

        if (index == code.length - 1) {
          alert("You know the code!")
        }
      }
    })
}
