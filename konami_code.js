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



function init() {
 
  function triggerKeyDown(e) {
    const keyboardEvent = e.keyboardEvent;
    document.body.dispatchEvent(keyboardEvent);
    for(let i = 0; i < codes.length; i++)
       triggerKeyDown(codes[i])
  }
}
