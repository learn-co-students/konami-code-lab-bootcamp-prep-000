const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// const code = [65,66,67]

let index = 0
let entered = []

function init() {
  document.body.addEventListener("keydown", function(e) {
    let keyed = parseInt(e.which|| e.detail)

    console.log(keyed)

    if(keyed === code[index]) {
      entered.push(keyed)
      index++

      if(entered.length === code.length) {
        alert("Congrats!")
        index = 0
        entered = []
      }
    }
    else {
      index = 0
    }
  })
}
