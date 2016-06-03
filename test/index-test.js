const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {
  jsdom({
    html: fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8'),
    src: fs.readFileSync(path.resolve(__dirname, '..', 'konami_code.js'), 'utf-8')
  })

  function triggerKeyDown(which) {
    const keyboardEvent = document.createEvent("KeyboardEvent")
    const initMethod = typeof keyboardEvent.initKeyboardEvent === 'undefined' ?
            "initKeyEvent" : "initKeyboardEvent"

    keyboardEvent[initMethod](
      'keydown',
      true,
      true,
      window,
      false,
      false,
      false,
      false,
      which,
      0
    )

    document.dispatchEvent(keyboardEvent)
  }

  describe('konami code', () => {
    it('triggers an alert if the right code is entered', () => {
      const body = document.body

      triggerKeyDown(38)

    })
  })
})
