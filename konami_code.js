const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  konami()
}

function konami() {
  document.addEventListener('keydown', cb, false)

  var xs = []
  var ys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function cb(e) {
    var k = parseInt(e.detail || e.which)
    xs.push(k)
    if(xs.length == ys.length ) {
      if(xs.every(function(el,i) { return el === ys[i]}) ) {
        alert('PRO EVOLUTION SOCCER 2017')
      } else {
        arr = []
      }
    }
  }
}
