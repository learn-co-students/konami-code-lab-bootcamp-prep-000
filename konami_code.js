const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

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
