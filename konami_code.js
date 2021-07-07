var index = 0;

const codes = [
  "38",
  "38",
  "40",
  "40",
  "37",
  "39", 
  "37",
  "39",
  "66",
  "65"
];

function init(e) {
  var key = e.keyCode
  if (key == codes[index]) {
    index++;
    console.log(index)
    if (index === codes.length) {
      alert('Good job!');
      index = 0;
    }
  } else {
    index = 0;
  }
}
document.body.addEventListener('keydown', init, false);