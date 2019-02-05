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

window.onload = init;

function init() {
  let access = 0;
  document.body.addEventListener('keydown', function(e){
    if(e.key == codes[access]){
      access++;
    }
    else {
      access = 0;
    }
    
    if(access == 10){
      alert("Hurray!");
      access = 0;
    }
  });
}
