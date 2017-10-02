const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init(e) {

  // Write your JavaScript code inside the init() function
  let i = 0
  const body = document.querySelector('body')
  body.addEventListener("keydown", function(e){


const key = parseInt(e.detail || e.which)

  if (key === code[i]){
    alert()
    i++

    if (i === code.length){
      alert('Great Job!')
      i++
    }
  }else{
      i = 0
  }

  })

}
