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

  describe("Konami code", () => {
    it("triggers an alert if the right code is entered", () => {
      init();

      var spy = sinon.spy(window.alert);

      for (let i = 0, l = codes.length; i < l; i++) {
        triggerKeyDown(codes[i]);
      }

      expect(spy.called);
    });

    it("does not trigger an alert if the wrong code is entered", () => {
      init();

      var spy = sinon.spy(window.alert);

      for (let i = 0, l = codes.length; i < l; i++) {
        triggerKeyDown(i);
      }

      expect(spy.notCalled);
    });
  });
});
