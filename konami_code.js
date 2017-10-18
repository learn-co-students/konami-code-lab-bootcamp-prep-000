const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function
let index = 0
const main = document.getElementsByTagName('body')[0]
main.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    console.log(`${key}`)
    if (key === code[index]){
      index++
      console.log(`${index}`)
      if (index === code.length){
        return alert('You Have Done It!')

        index = 0
      }
    } else {
      index = 0
    }
})
}

function done() {

}
