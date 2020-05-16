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

function init() {
  var index=0;
  document.body.addEventListener('keydown', onKeyDownHandler);
  
  function oneKeyDownHandler(e){
    const key = parseInt(e.details || e.which)
    console.log('key', key)
    if (key === codes[index]) {
      index++
      
      if (index===codes.length){
        alert "Nice Job!"
        index=0
      } else {
        index =0
      }
    }
  }
}
init()
