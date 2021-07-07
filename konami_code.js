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
  document.addEventListener('keydown',function(e){
      let key= e.key;
      if (key === codes[index]) {
         index++;
      } else {
        index = 0;
      }

      if (index === codes.length) {
           window.alert("Hurray!");
           index = 0;
      }
  });
}
