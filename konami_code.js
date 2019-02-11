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
  document.addEventListener('keydown', function (e) {
    const key = e.key;

     if (key === code[index]) {
      index++;

       if (index === code.length) {
        window.alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}