const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];




function init() {
  document.body.addEventListener('keydown', handleKonamiCode);
  let input = 0;
  function handleKonamiCode(event) {
    const key = parseInt(event.which || event.detail);
    if (key === code[input]) {
      input++;
      if (input === code.length) {
        alert('Woo');
      }
    } else {
      input = 0;
    }
  }
}
