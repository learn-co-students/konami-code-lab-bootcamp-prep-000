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
  let body = document.querySelector('body')
  body.addEventListener('keydown', function(e) {
    for (let i=0;code.length>i;i++){
      if (parseInt(e.detail) === code[i]){
        alert('You did it!')
      }
    }
})
}
