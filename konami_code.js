const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init(){
var body = document.querySelector("body")
body.addEventListener('keydown', function(e) {
  const key = parseInt(e.detail||e.which)
  if(code[index]===key){
    index++
    if(index===code.length){
      alert('Konami Worked!')
      index = 0
    }
  } else {
    index = 0
    }
})
}
