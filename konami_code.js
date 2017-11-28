const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var empty = 0;
  document.body.addEventListener('keydown', function(event){
    var x = parseInt(event.which || event.detail);
      if(code[empty] === x){
        empty++;
        if (empty === code.length){
          alert("It matches");
          empty = 0;
        }
      } else {
          empty = 0;
      }
  });
}
