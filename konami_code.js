const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {//Open init
let i = 0;
document.body.addEventListener('keydown', function(key) {//Open anonymous func
console.log(key.which || key.detail);
  if (parseInt(key.which || key.detail) == code[i]) {//Open if 1
  console.log(`match ${i}`);
  i++;
    if (i == code.length - 1) {//Open if 2
    alert('KONAMI!');
    }//Close if 2
  }//Close if 1
  else {
  i = 0;
  }
});//Close anonymous func
}//Close init
