const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0
  document.body.addEventListener('keydown', function(e){
  let inputCode = parseInt(e.which || e.detail)
    if(inputCode === code[index]){
        index++
      }
    if(index === code.length - 1){
      alert("Great job buddy!")
        index = 0
    }
      else{
        return e.stopPropagation()
      }
    })
}
