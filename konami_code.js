const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here

  let index = 0
  document.addEventListener('keydown', (e) => {
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
      console.log(index)
      if (index === code.length - 1) {
        alert('THERE IS NO COW LEVEL')
      }
    }
    else {
      index = 0
    }
  })
}
