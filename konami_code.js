const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (key === code[code.length-1]) {
        alert(`This is the Konami Code!`);
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
init();

/* commented out
function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e){
    let key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      let key = parseInt(e.detail || e.which);
      if(key === code[index]){
        index++;
        let key = parseInt(e.detail || e.which);
        if (key === code[index]) {
          index++;
          let key = parseInt(e.detail || e.which);
          if (key === code[index]) {
            index++;
            let key = parseInt(e.detail || e.which);
            if (key === code[index]) {
              index++;
              let key = parseInt(e.detail || e.which);
              if (key === code[index]) {
                index++;
                let key = parseInt(e.detail || e.which);
                if (key === code[index]) {
                  index++;
                  let key = parseInt(e.detail || e.which);
                  if (key === code[index]) {
                    index++;
                    let key = parseInt(e.detail || e.which);
                    if (key === code[index]) {
                      index++;
                      let key = parseInt(e.detail || e.which);
                      if (key === code[index]) {
                        alert(`Konami Code.`);
                      }
                    } else {index = 0;}
                  } else {index = 0;}
                } else {index = 0;}
              } else {index = 0;}
            } else {index = 0;}
          } else {index = 0;}
        } else {index = 0;}
      } else {index = 0;}
    } else {index = 0;}
  }
}
init();
*/
