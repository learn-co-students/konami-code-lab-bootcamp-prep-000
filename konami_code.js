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
  let index=0;
  document.body.addEventListener('keydown', myEventListener);
  function myEventListener(e){
    const key= e.key;
    if (key=== codes[index]){
      index++;
      if (index===codes.length){
        alert("Congratulations!");
      }
    }else{
      index=0;
    }
  }
}
