const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
    alert('in init');

    // your code here
    var body = document.querySelector('body');
    body.addEventListener('keydown', onKeyDownHandler);
}

function onKeyDownHandler(e) {
    const keyCode = parseInt(e.which || e.detail);
    console.log(`keyCode: ${keyCode}`);
    if (keyCode === code[index]) {

        if (index === code.length - 1) {
            alert('YOU DID IT!');
            index = 0;
        }
        index++;
    } else {
        index = 0;
    }

}
init();
