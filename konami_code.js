// Keys for Konami keys.
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
  
  // Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {

    // store the pressed key in const key
    const key = e.key;

    //   If the pressed key matches the codes element for the current index, increment index
    if (key === codes[index]) {
        index++;

        // If the key entries matched with all codes elements, alert message and reset index
        if (index === codes.length) {
            alert("KONAMI !");

            index = 0;
        }

        // else keep the index reset for non matching entries
    } else {
        index = 0;
    }
    // log key presses
    log.textContent += ` ${e.key}`;
}


// Event Listener
document.body.addEventListener('keydown', onKeyDownHandler);


const log = document.getElementById('log');
  
}



