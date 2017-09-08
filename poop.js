const code = [65, 66, 67]

const main = document.querySelector('body')

let index = 0

function triggerKeyDown(e) {
  const key = parseInt(e.detail || e.which);
  console.log(e.which)
  console.log(e.detail)

  if (key === code[index]) {
    index++;
    console.log("Yes", + index)

    if (index === code.length) {
      alert("You have unlimited lives!");

      index = 0;
    }
  }
  else {
    index = 0;
    console.log("Not quite!!!")
  }
}
main.addEventListener('keydown', function(e) {
  const key = parseInt(e.which)
  if (key === code[index]) {
    console.log("YES!")
    index++;
    if (index === code.length) {
      alert("You have unlimited lives!");
      index = 0;
    }
  }
  else {
    console.log('Wrong again. Start over...')
    console.log(e.which)
    console.log(key)
    index = 0
  }
})
