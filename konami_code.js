const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    const konami = document.body
    let i = 0;
    konami.addEventListener('keydown', function onKeyDownHandler(e){
      const key = parseInt(e.detail || e.which);

        if(key === code[i]){
          i++;

          if(i+1 === code.length){
            alert("Hurray!");

            i = 0;
          }
        }
        else {
          i = 0;
        }

      }

    )}

init()
