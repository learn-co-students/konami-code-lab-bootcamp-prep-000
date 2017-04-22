const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e){
      const key = parseInt(e.detail || e.which);
      if (key === code[index]){
        index ++
        if (index === code.length){
          alert('b a b a select start');
          index = 0;
        }
      }
      else {
        index = 0;
      }
    });
};

//init();
