const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init(e){

document.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which)
  console.log(e.which)

  if (key===code[index]){
    index++
  //this is the phrase that will "catch" the first key. If the first key catches, it stores into the indez, and moves on to the second place in index. If the second key catches it moves onto the third, and so on, until there is nor match where the index resets to zero below. or....

  // there are then keystrokes in the Konami code but var starts at 0. Each keystroke log +1 to zero. Therefore index will always be one behind the code. Think of it as 10 little tests. If it passes the 10 tests then, you have entred the code correctly.
  if(index===code.length-1){
    alert ("Baymm you ahve entered the Konami Code")
    index =0  //resets the index
  }

  }else {
    index = 0
  }
})
}
