const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector('body');
  let i = 0;
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail); //tells me which key has been pressed from the event
    if (key === code[i]) {
      i++;
      if (i === code.length) {
        alert("StephenCurry");
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}

// const body = document.body.addEventListener('keydown', init);
// let entered = [];
//
// function init(e) {
//   if(entered.length===10) {
//     entered.shift();
//   }
//   let key = parseInt(e.which || e.detail);
//   entered.push(key);
//   console.log(entered);
//   let check = true;
//   for(let i=0;i<code.length;i++) {
//     if(code[i] != entered[i]) {
//         check = false;
//     }
//   }
//   if(check===true) {
//     alert("Yeeee");
//   }
//
// };
