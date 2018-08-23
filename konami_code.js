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




const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.getElementsByTagName("BODY")[0]
  let clickPattern = []

  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)
    clickPattern.push(key)

    for (let i = 0; i < clickPattern.length; i++){
      if (clickPattern[i] != code[i]){
        clickPattern = []
        break;
      }
    }

    if (clickPattern.length === code.length){
      alert('you got it')
      clickPattern = []
    }

  })

}