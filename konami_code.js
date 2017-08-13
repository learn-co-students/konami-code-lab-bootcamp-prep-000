const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]//[u, u, d, d, l, r, l, r, b, a]

let index = 0

function init() {
  const body = document.querySelector('body')//selects the body portion
  body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)

    if (key === alphabet[index]){
      index++

      if (index === alphabet.length){
        alert("Hurray")

        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
