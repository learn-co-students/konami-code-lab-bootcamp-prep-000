const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var body = document.querySelector('body');
  var codeCheck = [];

  body.addEventListener('keydown', (e) => {
    let key = parseInt(e.detail);
    codeCheck = codeCheck.concat(key), attempt = codeCheck.length;
    console.log(key);
    if(codeCheck.join("") === code.join("")){
      alert("FATALITY!!!!");
    }
    else if (codeCheck.join("") !== code.slice(0, attempt).join("")) {
        codeCheck = [];
    }
  });
}
