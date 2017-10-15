const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var inputBuf = []
  var match
  document.body.addEventListener('keydown', function(e) {
    if (inputBuf.length >= code.length) {
      inputBuf.shift()
    }
    inputBuf.push(e.detail || e.which)

    match = true
    for (let c in code) {
      if (code[c] !== parseInt(inputBuf[c], 10)) {
        match = false
      }
    }

    if (match === true) {
      alert('＼(≧▽≦)／ [573] ٩(◕‿◕)۶ [573] ＼(≧▽≦)／')
    }
  })
}
