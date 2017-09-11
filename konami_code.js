const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


let index = 0;
let entered = [];

function init() {
  document.body.addEventListener("keydown", function(e) {
    var keyed = parseInt(e.which|| e.detail);

    if(keyed === code[index]) {
      entered.push(keyed);
      index++;
      if(entered.length === code.length) {
        alert("Congrats!");
        index = 0;
        entered = [];
      }
    } else {
      index = 0;
    }
  });
}
