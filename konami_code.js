const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // your code here
  konamiCode();
};

function konamiCode() {
  document.addEventListener('keydown', checkCode, false);

  var x = [];
  var y = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  function checkCode(e) {
    var k = parseInt(e.detail || e.which);
    x.push(k);
    if(x.length === y.length ) {
      if(x.every(function(element, index) { return element === y[index]})) {
        alert('This is the secret cheat code!!!!!');
      } else {
        x = [];
      };
    };
  };
};
