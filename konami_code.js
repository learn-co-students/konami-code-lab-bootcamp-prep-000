const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', listenForCode);
}

let codeIndex = 0;

function listenForCode(e) {
  // HACK: it seems jsdom (what our tests/mocha uses to host the DOM) puts 
  //    the key in e.detail, which is not where the spec says it should go:
  //    https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
  //    > For all other UIEvent objects, UIEvent.detail is always zero.
  let key = e.detail || e.which;

  // HACK: use == and not ===, so string/number comparisons will be coerced
  if (key == code[codeIndex]) {
    codeIndex++;
    if (codeIndex === code.length - 1) {
      alert('you did it');
    }
  }
  else {
    codeIndex = 0;
  }
}