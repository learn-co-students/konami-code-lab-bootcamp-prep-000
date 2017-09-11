const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];



function init() {
  console.log('initialize');

  index = 0;

  document.body.addEventListener('keydown', function(e) {
    //alert('hello world');
    const key = parseInt(e.detail || e.which);

    console.log(key);

    if(key===code[index]){
      index++;
      console.log(index);
      if(index===code.length){
        alert("Hoorah!");
        index = 0;
      }
    } else {
      index = 0;
    }

  });

}
