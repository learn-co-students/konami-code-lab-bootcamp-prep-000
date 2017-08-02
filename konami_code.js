const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
const body = document.querySelector("body")

function codeCheck(e){
  var key = parseInt(e.detail || e.which)
  console.log(key)
  if (key === code[index]) {
    console.log("a hit!")
    index++

    if (index === code.length) {
      alert("Hurray!")
          index = 0
        }
      }  else {
            index=0
              console.log('miss!')
            }

          }

function init() {
    body.addEventListener('keydown',codeCheck)

}
