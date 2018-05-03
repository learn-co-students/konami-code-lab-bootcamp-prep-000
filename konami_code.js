const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const body = document.querySelector('body')
  console.log(body)
  body.addEventListener('keydown',function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key, code[index])
    if (key === code[index]) {
    index++;
    console.log(index)

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })

}
