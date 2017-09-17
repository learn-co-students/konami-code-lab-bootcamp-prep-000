const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const pretvornaTabela = [];
pretvornaTabela[54] = 38;
pretvornaTabela[53] = 37;
pretvornaTabela[56] = 40;
pretvornaTabela[191] = 39;

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e){
   const key = parseInt(e.detail || e.which);
   keyCode = convert(key);
   if (keyCode === code[index]) {
     alert(keyCode);
     index++;
     if (index === code.length) {
        alert("Hurray!");
        index = 0;
       }
    }else{
      index = 0;
    }
  }
  function convert(key){
    for (var k in pretvornaTabela) {
      if (key === parseInt(k)) {
        key = pretvornaTabela[k];
      }
    }
    return key;
  }
}
