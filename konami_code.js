const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//gets the body where the event listener will go
const body = document.querySelector('body')
//this will count through the code
var index = 0

function init() {
  body.addEventListener('keydown', function(e) {
    //check to see if keydown is equal to current index in code
    if(parseInt(e.which || e.detail) === code[index]) {
      index++
      //find out if we've reached the end of the code
      if(index === code.length) {
        window.alert('Congratulations!')
        //reset code
        index = 0
      }
    } else { //if it's not the write keydown, start back at 0
      index = 0
    }
  })
}

//init()
