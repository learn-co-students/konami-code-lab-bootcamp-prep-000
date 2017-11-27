const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  let index=0;
  window.addEventListener("keydown", function(event){
    const key=parseInt(event.which||event.detail);
    if(key===code[index]){
      index++;
      if(index===code.length){
        alert("Cheat activated, you cheater")
        index=0;
      }
    }
    else{
      index=0;
    }
  })
}
init();
