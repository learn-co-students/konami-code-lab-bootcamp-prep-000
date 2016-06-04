const chai = require('chai')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const spies = require('chai-spies')

chai.use(spies)

const expect = chai.expect

describe('index', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
  const src = fs.readFileSync(path.resolve(__dirname, '..', 'konami_code.js'), 'utf-8')

  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  jsdom({ html, src })

  function triggerKeyDown(which) {
    const keyboardEvent = document.createEvent("KeyboardEvent")

    keyboardEvent.initKeyboardEvent(
      'keydown',
      true,
      true,
      window,
      which,
      which,
      0,
      null,
      null
    )

    document.body.dispatchEvent(keyboardEvent)
  }

  describe('Konami code', () => {
    it('triggers an alert if the right code is entered', () => {
      init()

      window.alert = chai.spy()

      for (let i = 0, l = code.length; i < l; i++) {
        triggerKeyDown(code[i])
      }

      expect(window.alert).to.have.been.called.once
    })

    it('does not trigger an alert if the wrong code is entered', () => {
      init()

      window.alert = chai.spy()

      for (let i = 0, l = code.length; i < l; i++) {
        triggerKeyDown(i)
      }

      expect(window.alert).not.to.have.been.called
    })
  })
})
