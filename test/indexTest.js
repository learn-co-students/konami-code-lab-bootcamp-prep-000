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

  function triggerKeyDown(key) {
    const keyboardEvent = new KeyboardEvent("keydown", { key });
    document.body.dispatchEvent(keyboardEvent);
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
