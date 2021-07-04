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

function init(){
  var index = 0;
    document.body.addEventListener('keydown', function(e){
      var keys = parseInt(e.detail || e.which);
        if(keys === code[index]){
            index++;
            if(index === code.length-1){
              alert('YOU DID IT!');
              index = 0;
            }
          }else{
            index = 0;
          }
        })
}
