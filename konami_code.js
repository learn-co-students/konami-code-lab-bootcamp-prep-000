const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    var index = 0
  document.addEventListener('keydown',function(e){
    const key = parseInt(e.which || e.detail)
    if (key === code[index]){
      index ++
      if (index === code.length){
        alert('wow!')
      }
    }else{index = 0}
  })
}
