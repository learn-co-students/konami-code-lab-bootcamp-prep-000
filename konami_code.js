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
  // your code here
  var index = 0;
  function onKeyDownHandler(e){
    var key = parseInt(e.which || e.detail);
    if(key===code[index]){
      index++;
      if(index===code.length-1){
        alert('CODE CRACKED!!!');
        index=0;
      }
    } else {
      index = 0;
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler);
}
