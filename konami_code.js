const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var progress=0;

function init() {
  document.body.addEventListener('keydown', (e)=>{
    const key = parseInt(e.detail || e.which);
    console.log(key);
      if (key === code[progress]){
        progress++;
        console.log(progress);
        if (progress===code.length){
          alert("You did it!");
          progress=0;
        }
      }else if (progress>0) {
        progress=0;
      }
  })
}

// function tracker(e){
//   console.log(e.which);
//   const key = parseInt(e.detail || e.which)
//     if (key === code[progress]){
//       progress++;
//       if (progress===code.length-1){
//         alert("You did it!");
//         progress=0;
//       }
//     }else if (progress>0) {
//       progress=0;
//     }
// }
