const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  // const input = document.body.querySelector('#mocha');

    document.body.addEventListener('keydown', function (e){
    const key = parseInt(e.detail || e.which);

    if (key === code[index]){
      index++;

      if (index === code.length){
        alert("Congrats you did it!");

        index = 0;
      }
    }else {
      index = 0;
    }
  })
}
