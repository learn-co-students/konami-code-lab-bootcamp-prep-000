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

const konamiCheck = function() {
  codeIndex = 0;

  return function(e){
    if (e.key === codes[codeIndex]){
      console.log("NICE");
      codeIndex += 1;
      if (e.key === "a"){
        alert("KONAMI GOD MODE ACTIVATED!!!");
        codeIndex = 0;
      }
    }
    else {
      console.log("WOMP WOMP");
      codeIndex = 0;
    }
    console.log(e.key);
  }
}()

function init() {
  document.body.addEventListener('keydown', konamiCheck)
  // your code here
}

init();


