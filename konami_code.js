//  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//  describe('index', () => {
//  keep track of index outside of the event handler
    var index = 0
    console.log('indexing')


function init() {
  console.log('im init')

/*  describe('Konami code', () => {
    it('triggers an alert if the right code is entered', () => {
    init()
*/

  function konamiCode() {
    console.log('koonami start')

    // attach event listener to document.body and check for 'keydown' events.
    document.body.addEventListener('keydown', function(e) {
      console.log(e.which)
      console.log('eventlistener succesful')
    })
        const key = parseInt(e.detail || e.which)
        console.log('key created')

//    if you press a succesful button, you get to try the next correct button
      if (key === code[index]) {
        index++

/*      expect(window.alert).toHaveBeenCalled()
        })
        if the user enters the Koonami Code, alert() a congratulatory message

        if you press all the buttons in order an alert should pop up congradulating you
*/
        if (index === code.length - 1) {
          alert("YOU DID IT!")
          index = 0
        }

/*      it('does not trigger an alert if the wrong code is entered', () => {
        init()

        if they start entering anything else anywhere along the way, dont trigger
        anything out of the ordinary.
*/
      } else {
        index = 0
      }
    }
  }

//when you're testing the code out, be sure to call init() to set everything up!
init()
