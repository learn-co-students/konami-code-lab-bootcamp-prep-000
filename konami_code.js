const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.body.addEventListener("keydown", function(a){
      var key = parseInt(a.which || a.detail)
    for (var i = 0; i < code.length; i++) {
      if (key === code[i]) {
        alert('Congratulation!!!')
      }
    }
  })
}

//document.body.addEventListener('keydown',function(){alert('Congratulation')})
