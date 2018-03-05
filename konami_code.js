const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
//            &   &   )   )   %   '    %  '   B   A
// Key codes for A, B, and C keys.
// alphabet = [65, 66, 67];
let index = 0;

function init() {

  document.addEventListener('keydown', 
  (e) => {
    const keyName = e.key;
    const key= parseInt(e.detail || e.which);
    //alert(`keypress event\n\nkey: ${keyName}\n\ncode: ${key}`);
    onKeyDownHandler(e);
    

    
  });

}
function onKeyDownHandler(e) {
  const key= parseInt(e.detail || e.which);
 
    if (key === code[index]) {
      index++;
  
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
        }
      } else {
      index = 0;
        }
    }


