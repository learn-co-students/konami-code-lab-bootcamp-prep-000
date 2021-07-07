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

index = 0;
function init() {
document.body.addEventListener("keydown", function (e) {
    const key = e.key
    if (codes[index] === key) {
      ++index } else { index= 0}
    if (index === codes.length) {
     alert("Congats!");
      index = 0
    }
    
  });
}


