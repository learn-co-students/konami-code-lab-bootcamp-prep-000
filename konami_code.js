const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;
function init() {
  document.body.addEventListener('keydown', function(event){
    if(parseInt(event.which || event.detail) === code[index]){
        index++
        if(index === code.length ){
          alert("You have cracked the Konami Code!!");
          index = 0

        }
      } else {
          index = 0
          }
        })
      }
