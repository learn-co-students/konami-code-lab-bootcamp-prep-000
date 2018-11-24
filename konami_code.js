
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

function init(){
  document.addEventListener("keydown", function(event) {
    console.log(event.key === codes[index]);
    if(event.key === codes[index]){
      index++;
      if (index === codes.length) {
        window.alert("Hooray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
