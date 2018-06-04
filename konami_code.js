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
  var count = 0;
  document.body.addEventListener('keydown',function(e) {
    var string = codes[count];
    var press = e.key;
    if (string === press) {
      console.log(string);
      count++;
      if (count === codes.length) {
        alert('Hurray!');
        count = 0;
      }
    } else {
      count = 0;
      }
  } )
}