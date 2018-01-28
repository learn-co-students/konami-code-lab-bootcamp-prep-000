const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {
  const main = document.body;
  main.addEventListener('keydown', function (event) {
    var key = parseInt(event.detail || event.which);
    if (key == code[index]){
      index++;

      if (index == code.length){
        alert('you did it!');
      }
    }
    else {
      console.log('wrong');
      index = 0;
    }


  })
}
