const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init(){
  document.body.addEventListener("keydown", function keydownEventHandler(e){
    let key = parseInt(e.detail || e.which);

      if(key === code[index]){
        index++;

        if(index === code.length){
        alert("Well done!");

        index = 0;
      }}// end if

      else {
        index = 0;
      }// end else
    });// end event handler
}// end init
