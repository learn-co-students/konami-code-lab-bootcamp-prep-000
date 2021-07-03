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
  let index = 0;
  const doc = document.body;
  doc.addEventListener('keydown', function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which);

    if (key === code[index]){
      index++;
      if(index === code.length-1){
        alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }

  })
}
