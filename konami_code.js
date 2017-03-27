const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 0;
function init(){
    document.body.addEventListener('keydown', total);
  }

function total(e){
          var keyNumber = parseInt( e.detail || e.which );

          if ( keyNumber == code[i] ) {
            i++;
            if (i === code.length - 1) {
              alert("YOU DID IT!");
            }
          } else {
            i = 0;
          }
        }
