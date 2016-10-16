const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var idx=0
function init() { document.addEventListener('keydown', function(e) {
  var key=parseInt(e.detail || e.which)
  if(key==code[idx])idx++
  else idx=0
  if(idx==code.length)alert('hi')
})
  // your code here
}
