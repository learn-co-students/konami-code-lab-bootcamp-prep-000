const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const konami_code = document.body
var index = 0

function init() {
  // Write your JavaScript code inside the init() function
  konami_code.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);
      if (key === code[index]){
        index++
        console.log(index)
        console.log(key)
          if (index === code.length){
             alert("Hurray!");
            index = 0;
          }
      }
  else {index =0}
  })
}
