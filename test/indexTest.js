const expect = chai.expect;

describe("index.js", () => {

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
  
  for (let i = 0, l = codes.length; i < l; i++) {
  triggerKeyDown(codes[i]);
}
expect(spy.called).to.equal(true)
expect(spy.callCount).to.equal(1)

  function triggerKeyDown(key) {
    const keyboardEvent = new KeyboardEvent("keydown", { key });
    document.body.dispatchEvent(keyboardEvent);
  }
  // Keys for A, B, and C keys.
const alphabet = ['a', 'b', 'c'];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
  init()

  describe("Konami code", () => {
    
    const spy = sinon.stub(window, "alert");
    
    it("triggers an alert if the right code is entered", () => {
      
      for (let i = 0, l = codes.length; i < l; i++) {
        triggerKeyDown(codes[i]);
      }
      expect(spy.called).to.equal(true)
      expect(spy.callCount).to.equal(1)
    });

    it("does not trigger an alert if the wrong code is entered", () => {
      spy.reset()

      for (let i = 0; i < codes.length - 1; i++) {
        triggerKeyDown(codes[i])
      }
      triggerKeyDown("ArrowUp")
      
      expect(spy.notCalled).to.equal(true);
    });
  });
});
