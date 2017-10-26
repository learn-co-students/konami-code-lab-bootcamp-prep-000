const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  document.body.addEventListener('keydown',onKeyDownHandler)
  // initialize variables
  let entered = [];

  function onKeyDownHandler(e) {
    let check = true;

    //add new key value to array
    let key = parseInt(e.which || e.detail);
    entered.push(key);

    if(entered.length>10) {
      entered.shift();
    }

    //check if entered === code
    for(let i=0;i<code.length;i++) {
      if(code[i] != entered[i]) {
          check = false;
      }
    }

    //if correct, alert
    if(check===true) {
      window.alert("Yeeee");
    }
  }
}
