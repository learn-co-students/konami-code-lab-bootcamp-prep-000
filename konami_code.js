const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;
function init(e) {
document.body.addEventListener('keydown', function go(e) {
  const key = parseInt(e.detail || e.which);
  if(key === code[index]){
    index ++;
    if(index === code.length) {
      window.alert("HELL YEAH! METAL GEAR SOLID!");
    }
  }
  else { index = 0}
  });
}
