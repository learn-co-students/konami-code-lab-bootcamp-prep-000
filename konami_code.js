const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
}

idx = 0

document.body.addEventListener('keydown',
  function(e) {
    key = parseInt(e.which || e.detail)
  if (key === code[idx]) {
    if (code[idx] === 65){
      alert("YOU DID THE THING")
    }
    console.log(key)
  idx++
  }
  else{
    idx = 0
  }
  }
)
