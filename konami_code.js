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
    let idx = 0

    document.body.addEventListener("keydown", function(e){
      console.log(e.key);
      if (e === codes[idx]) {
      idx++;}

      if (idx === codes.length) {
        alert("Hurray!");

        idx = 0;
      }
       else {
      idx = 0;
    }
  });


  }
