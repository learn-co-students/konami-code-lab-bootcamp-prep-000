const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var hitCounts = 0;

  document.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if (key === code[hitCounts]){
      if (hitCounts === code.length - 1){
        alert('Congratulations !!!');
        hitCounts = 0;
      }else {
        hitCounts++;
      }
    }else {
      hitCounts = 0;
    }
  });
}
