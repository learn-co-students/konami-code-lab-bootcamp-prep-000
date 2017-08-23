const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const input = document.querySelector('body');


function init() {
  var keysEntered = [];
  let index = 0;
        input.addEventListener('keydown', function(e) {
                  var key = parseInt(e.detail || e.which)
                        if (key === code[index]) {
                          index++;
                            if (index === code.length) {
                                alert('FLAWLESS VICTORY');
                                index = 0;
                            }

                        } else {
                          index = 0;

                        }
        })
}
init();
/*
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
*/
