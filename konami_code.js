const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  // MY WAY OF DOING IT - COMPARISON OF ARRAYS
  // var entered = []
  // var idx = 0
  //
  // document.body.addEventListener('keydown', function(e) {
  //   var key = parseInt(e.which || e.detail, 10)
  //
  //   // Enter key clears code
  //   if (key === 13) {
  //     entered = []
  //   } else {
  //     entered.push(key)
  //   }
  //
  //   // Only compare arrays if they are the same length
  //   if (entered.length === code.length) {
  //     for (let i = 0; i < entered.length; i++)
  //       if (entered[i] !== code[i]) {
  //         break
  //       } else {
  //         idx = i + 1
  //       }
  //     }
  //
  //   if (idx === code.length) {
  //     entered = []
  //     alert('Here, have an egg ^-^')
  //   }
  // })

  var j = 0, key
  document.body.addEventListener('keydown', function(e) {
    key = parseInt(e.detail || e.which)

    if (key === code[j]) {
      j++

      if (j === code.length - 1) {
        alert('Here, have an egg ^_^')
        j = 0
      }
    } else {
      j = 0
    }
  })
}
init()
