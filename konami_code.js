const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const activateCheats = document

  var correctSequence = false
  var i = 0;

  activateCheats.addEventListener('keydown', function(event) {
    console.log(event.which);
    if(event.which === code[i])
    {
      i++
      if(i === code.length)
      {
        alert("Cheats Activated!")
      }
    }
    else {
      i = 0
    }

  })
}
