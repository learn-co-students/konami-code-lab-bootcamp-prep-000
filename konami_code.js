const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var next_key = 0
  document.body.addEventListener('keydown',
    function(e) {
      console.log(e.key)
      console.log(next_key)
      if (e.key === codes[next_key]) {
        next_key += 1
      } else {
        next_key = 0
      }
      if (next_key === codes.length) {
        // alert('+30 Karma')
        // var karma = document.querySelector('#js--karma-points-count')
        // karma.innerHTML = parseInt(karma.innerHTML) + 30
        alert('+30 passes')
        var passes = document.querySelector('.passes em')
        passes.innerHTML = parseInt(passes.innerHTML) + 30
        next_key = 0
      }
    })
}
