const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const listento = document.body
  let index = 0;

  listento.addEventListener('keydown',function(e){
    debugger
    var key = parseInt(e.detail || e.location);
    if (key === code[index]) {
      index++;
      if(index === code.length) {
        alert("Konami Code Achieved!");
        index = 0;
      } 
    }
    else {
      index = 0;
    }
  })
}