describe('index', () => {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function triggerKeyDown(which) {
    const keyboardEvent = document.createEvent("KeyboardEvent")

    // http://stackoverflow.com/questions/10455626/keydown-simulation-in-chrome-fires-normally-but-not-the-correct-key/10520017#10520017
    Object.defineProperty(keyboardEvent, 'keyCode', {
      get: function() {
        return this.keyCodeVal;
      }
    });
    Object.defineProperty(keyboardEvent, 'which', {
      get: function() {
        return this.keyCodeVal;
      }
    });

    keyboardEvent.initKeyboardEvent(
      'keydown',
      true,
      true,
      window,
      which,
      which,
      0,
      which,
      which
    )

    keyboardEvent.keyCodeVal = which

    document.body.dispatchEvent(keyboardEvent)
  }

  describe('Konami code', () => {
    it('triggers an alert if the right code is entered', () => {
      init()

      window.alert = expect.createSpy()

      for (let i = 0, l = code.length; i < l; i++) {
        triggerKeyDown(code[i])
      }

      expect(window.alert).toHaveBeenCalled()
    })

    it('does not trigger an alert if the wrong code is entered', () => {
      init()

      window.alert = expect.createSpy()

      for (let i = 0, l = code.length; i < l; i++) {
        triggerKeyDown(i)
      }

      expect(window.alert).toNotHaveBeenCalled()
    })
  })
})
