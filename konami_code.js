const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler);
}

function onKeyDownHandler(e){
    
    if (e === undefined){
    }
    else{
      const key = e.key;
      if (key === codes[index]){
        index++;
        if (index === codes.length){
          alert("Hurray!");
          console.log("Hurray");
          index = 0;
        }
      }
      else{
        index = 0;
      }
    }
  }








