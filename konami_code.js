const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
var index = 0

const input = document.querySelector('code')

input.addEventListener('keydown', function(e){
const key = parseInt(e.detail || e.which);

if(code[index] === key) {index++}

if(index === code.length - 1) {alert(“Huzzah!”)

var index = 0}

else {return index
var index = 0}
})
