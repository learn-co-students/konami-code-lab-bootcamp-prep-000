const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var progress = [];

init();

function init() {
  reset(progress)
  document.addEventListener('keydown', function(event){

      if (event.keyCode === progress[0]){
        progress.shift();
      }
      else{progress = reset(progress)}
      if (progress.length === 0){alert("KONAMI!");progress = reset(progress)}
});

}
function reset(prog){
  prog = [];
  for (item in code){
    prog.push(code[item])
  }
  return prog
}
