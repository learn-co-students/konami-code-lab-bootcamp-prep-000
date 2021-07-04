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

var i=0;
function init() {
  document.body.addEventListener("keydown", function(e){
    e.preventDefault();
    const key = parseInt(e.detail || e.which);
    if (key === code[i]) {
    i++;
      if (i === code.length-1) {
        alert("Congratulations! You entered the Konami code!");
      }
    }
  })
}