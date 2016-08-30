const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var testing = []

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail)

    if (key === 38 || 40 || 37 || 39 || 66 || 65) {
      testing.push(key)

      if (testing.length === 10) {
        if (testing[0] === 38 && testing[1] === 38 && testing[2] === 40 && testing[3] === 40 && testing[4] === 37 && testing[5] == 39 && testing[6] === 37 && testing[7] === 39 && testing[8] === 66 && testing[9] === 65) {
        return alert('Konami!')
      }
      }
    }
  })
}
