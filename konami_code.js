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
  const input = document.querySelector('body');
  var keySeries = []

  input.addEventListener('keydown', function(e) {
    keySeries.push(e.key)
    if (keySeries.length === 10) {
      if (codes.join() === keySeries.join()) {
        window.alert("Magic!")
      }
      keySeries = [];
    }
  });
};



init()
