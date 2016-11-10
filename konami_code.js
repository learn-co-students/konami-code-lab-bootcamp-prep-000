

function init() {
    var idx = 0
    const theCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    const input = document.querySelector('body')
    input.addEventListener('keydown', function(e) {
        let key = parseInt(e.detail || e.which)
        console.log(key, idx, theCode[idx])
        if (key == theCode[idx]) {
            idx++
        } else {
            idx = 0
            return
        }
        if (idx == theCode.length - 1) {
            alert('What do you want me to say here?')
            idx = 0
        }
    })


}
