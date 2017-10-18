<<<<<<< HEAD
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
}

const main = document.body
main.addEventListener('keydown', onKeyDownHandler)

function onKeyDownHandler(e){
  const key = parseInt(e.which || e.detail)
  console.log(e.which || e.detail)
=======
const code = [38] //[38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
  const main = document.querySelector('body')

  main.addEventListener('keydown', function(e) {
  })
}

function onKeyDownHandler(e){
  const key = parseInt(e.which || e.detail)
>>>>>>> f44a66a0c3130882a8aac4a03a7e7000a53d7c14

  if (key === code[index]){
    index++
    if (index === code.length){
      alert('Congratualtions!')
      index = 0
    }
  } else{
    index = 0
  }
}
<<<<<<< HEAD
=======

  //comp.push(parseInt(e.which || e.detail))
  //comp.shift()
  //if (code === comp){
    //console.log(e.which || e.detail)
    //alert('Congratulations!')
  //}
//}

init()
>>>>>>> f44a66a0c3130882a8aac4a03a7e7000a53d7c14
