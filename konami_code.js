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

function iniit() {
  // your code here
  let i = 0;
  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[i]) {
      i++;
      if(i === codes.length) {
        alert("Hooray! Congrats you cracked the code!!")
      }
    }
    else {
      i=0;
    }   
});

}

