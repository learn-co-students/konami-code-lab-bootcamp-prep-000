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

  document.body.addEventListener("keydown", function(event){
      const key = parseInt(event.detail || event.which)

      if (key == code[index]) {
          index++

          if (index == code.length) {
              alert("F U, KONAMI!");
              index = 0;
          }
      } else {
          index = 0;
      }
  })
}
