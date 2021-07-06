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

var number = 0;

function init() {
  function konamiCode(e){
    if (e.which === codes[number]){
      number += 1;
      return true;
    }else{
      number = 0;
      return false;
    }
  }
  document.body.addEvenetListener('keydown', function(e){
    if (konamiCode(e) && number === codes.length){
      alert('Code activated!');
    }
  })
}
