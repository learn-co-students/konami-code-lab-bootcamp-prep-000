'use strict';
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  document.body.addEventListener('keydown', processEvent);

  let last10keys = [];

  function processEvent(event) {
    last10keys.push(parseInt(event.location || event.which));
    if (last10keys.length > 10) {
      last10keys.shift();
    };
    if (last10keys.length === 10 && JSON.stringify(code) === JSON.stringify(last10keys)) {
      alert('Happy Easter!');
    };
  }
}
