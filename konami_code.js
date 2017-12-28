const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  function whenKeyDownOccurs(e){
    const key = parseInt(e.detail || e.which)
    if(key === code[index]){
      index++;
        if (index === code.length){
          alert("Nice Job!")
        }
      } else {
        index = 0
      }
  }
    const body = document.querySelector('body')
    body.addEventListener('keydown',whenKeyDownOccurs)

}

