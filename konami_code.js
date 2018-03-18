const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var keyarray = []
function init() {
  // Write your JavaScript code inside the init() function
var body = document.body
body.addEventListener(`keydown`, function(e) {
  console.log(`e.which: ${e.which} - e.detail: ${e.detail} - e.location: ${e.location}`)
  if(e.which) {
    keyarray.push(parseInt(e.which))
  } else if (e.detail) {
    keyarray.push(parseInt(e.detail))
  } else {
    keyarray.push(parseInt(e.location))
  }
  if (keyarray.length > 10) {
    keyarray.shift()
  }
  console.log(keyarray)
  if (isArrayEqual(keyarray, code)) {
    alert("You did it!!!!!!!!!!")
  }
})
}


function isArrayEqual(array1, array2) {
  if (array1.length === array2.length) {
    for(let i = 0; i < keyarray.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true
  }
    
}