const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let pressed = [];

  document.body.onkeydown = (e) =>{
    const key = e.detail || e.which

    pressed.push(key);
    pressed = pressed.length > 10 ?  pressed.slice(pressed.length - 10, pressed.length) : pressed;

    if(pressed === code){
      alert("whoopie")
    }
  }

}


init()
