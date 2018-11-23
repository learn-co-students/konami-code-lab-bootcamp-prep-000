const codes = [
  "ArrowUp", //38
  "ArrowUp", //38
  "ArrowDown", //40
  "ArrowDown", //40
  "ArrowLeft", //37
  "ArrowRight", //39
  "ArrowLeft", //37
  "ArrowRight", //39
  "b", //66
  "a" //65
];

var i = 0;

function init() {
document.body.addEventListener("keydown", function konami(event){
    var pressedKey = event.key;
    console.log(event.key)

    if (pressedKey === codes[i]){
      i += 1;
      if (i === codes.length){
        alert("Konami Code")
        i = 0;
      }
    }
    else{
      i = 0;
      }
    })
  }
