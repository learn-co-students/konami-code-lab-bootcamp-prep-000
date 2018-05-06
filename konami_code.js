const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.querySelector('body')
  var index = 0
  body.addEventListener('keydown',function(event){
    const key = parseInt(event.detail || event.which)
//    console.log(`${key}, ${event.detail}, ${event.which}, ${event.location}`)
    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert('Hurray!')
        index = 0
      }
    }
    else if (key === code[0]) {
      index = 1
//      console.log(index)
    }
    else {
      index = 0
//      console.log(index)
    }
  })
}
