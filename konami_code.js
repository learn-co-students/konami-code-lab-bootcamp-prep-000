//key codes up, up, down, down, left, right, left right, b, a


const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init (){

  document.body.addEventListener('keydown', konamiCode, false );

  let index = 0;

  function konamiCode(e) {

    const key = parseInt(e.detail || e.which)

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
}

init()
