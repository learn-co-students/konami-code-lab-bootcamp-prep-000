/*const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  let index = 0;
  document.body.addEventListener("keydown", function(e){
    const key = parseInt(e.detail || e.which);
      if (key === code[index]) {
        index++;
      if index === code.length -1) {
        alert("hurray")

        index = 0
      }
    } else {
      index = 0
    }
  })
}// up up down down left right left right b a start

alert("congratulations!")
*/

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)

    if (code[index] === key) {
      index++

      if (index === code.length) {
        alert('woo-hoo!')

        index = 0
      }
    } else {

      index = 0
    }
  })
}
init()
//how would I make the page change to red ?
var redPage = document.getElementByTag('body')
redPage.style.color = 'red'
