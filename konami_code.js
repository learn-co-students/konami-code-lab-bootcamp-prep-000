const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let body = document.querySelector('body')
  body.addEventListener('keydown', function(e) {
    for (let i=0;code.length>i;i++){
      if (parseInt(e.detail) === code[i]){
        alert('You did it!')
      }
    }
})
}
