const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var current_index = 0

function handle(event) {
  var current_key = parseInt(event.which || event.detail)

  if(code[current_index] == current_key) {
    current_index += 1
  } else {
    current_index = 0
  }

  if(current_index == code.length - 1) {
    alert('GOT IT!')
  }
}

function init(e) {
  document.body.addEventListener('keydown', handle)
}
