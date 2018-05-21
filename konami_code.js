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

// function cheeter(e) {
//   let key = e;
    
//     if(key === codes[index]) {
//       index++;
//     }
    
//     if(index === codes.length) {
//       alert("CHEETER!!!");
//       index = 0;
//     } else {
//       index = 0;
//     }
//   }

function init() {
  let index = 0;
  document.body.addEventListener('keyup', (e) => {
    let key = e.key;
    console.log(index);
    if(key === codes[index]) {
      console.log(index, codes.length - 1);
      if(index === codes.length - 1) {
      cheeter();
      index = 0;
      }
      if(key !== codes[index]) {
        index = 0;
      }
      index++;
      
      
    }
    
    });
    function cheeter() {
      alert("CHEETER!!!");
      console.log('cheeter');
    }
}
