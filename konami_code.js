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

// var main = document.getElementById("myBtn")
var main = window.document
main.addEventListener("keydown", function() {
    myPress(event)
})

var index = 0

function myPress(e) {
    // alert(`${e.key} was pressed!`)
    const key = e.key
    if (key === codes[index]) {
        index ++
        // document.getElementById('demo').innerHTML = index
        if (index === codes.length) {
            alert("Hurray!")
            index = 0
        }
    }
    else {
        index = 0
    }
}
