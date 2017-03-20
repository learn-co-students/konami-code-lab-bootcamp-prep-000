const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

const body = document.querySelector('body')
// body.addEventListener('keydown', init(e)) <----this is how it should be written

// when the event handler aka init() << without the e is called - the event listener is attatched.
function init(){
    body.addEventListener('keydown', function(e) {

        const key = parseInt(e.detail || e.which)

        if (key === code[index]) {
            index++

            if (index === code.length) {
                alert('YOU DID IT!')
                index = 0
            }
        } else {
            index = 0
        }
    })

}



// function init(e) {
//     const key = parseInt(e.detail || e.which)
//
//     if (key === code[index]) {
//         index++
//
//         if (index === code.length - 1) {
//             alert('YOU DID IT!')
//             index = 0
//         }
//     } else {
//         index = 0
//     }
// }



// body.addEventListener('keydown', function init(e) {
//
//         const key = parseInt(e.detail || e.which)
//
//         if (key === code[index]) {
//             index++
//
//             if (index === code.length - 1) {
//                 alert('YOU DID IT!')
//                 index = 0
//             }
//         } else {
//             index = 0
//         }
// })
