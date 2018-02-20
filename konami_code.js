function init() {
  let index = 0
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  document.body.addEventListener('keydown', function (e){
    var key = parseInt(e.which ||e.detail);
    if (key === code[index]) {
      console.log(index)
      index = index + 1
    }
    if (index === code.length) {
      alert("Hurray");
      index = 0;

    }
  })

}