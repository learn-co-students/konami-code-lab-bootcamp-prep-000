//note: the numbers below represent these keys: ↑↑↓↓← →← →BA
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//assume: function init() will be called once page is loaded
//remember to manually run it from the console when testing
function init() {
  //program flow: this is initialized once
  var index = 0
  //body is a tag, not an element, so don't need to getElementById etc.
  //program flow: defines listener event
  document.body.addEventListener('keydown', function(e) {
    //program flow: program waits until there is a keypress, then proceeds
    //with the rest of the init() function, the code below.
    const key = parseInt(e.detail || e.which)
    console.log("index=" + index + " key=" + key + " code[index]=" + code[index])
    if (key == code[index]) {
       index++
       console.log ("MATCH.  Now index=" + index);
       if (index === code.length) {
         alert("YOU DID IT!")
         index = 0
       }
     } else {
       console.log("NO MATCH: Reset index to 0.")
       index = 0
     }
  })
}
