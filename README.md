# Konami Code Lab

## Objectives
1. Practice using event listeners.
2. Explain how event listeners are triggered.
3. Capture user interactions to trigger events on a page.

## Instructions
In `konami_code.js`, you'll notice that we've provided very little: well, just about nothing except -- what's that? If you open the file up in your text editor, you should see:
```js
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

}
```

But what could those numbers be? They're the famous [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), as keyboard event values. It's become a common Easter egg for sites to have hidden features behind this code, and now it's your turn to implement it!

In `index.html`, you'll see that we're loading the file in for you:
```html
<script src="konami_code.js"></script>
```

This is JavaScript's way of pulling in code from outside the page. Here, we've given the `<script>` tag a local source (the file that's right here in the directory), but we could also supply a URL to load an external resource (more on that in a bit).

You'll want to attach an event listener to `document.body` and check for `'keydown'` events. If the user enters this special code, pressing all ten of the keys in the correct order, `alert()` a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't `alert()` anything and simply keep listening for all ten `keydown`s in the correct order.

When you're testing the code out in the browser, be sure to call `init()` to attach the event listener and set everything up!

Stuck on how to get started? Here's a contrived, short example:
```js
// Key codes for A, B, and C keys.
const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
```

Have fun!

## Hints
Be aware that we're looking at both `e.detail` and `e.which`. In modern browsers, `e.which` is usually sufficient; however, it's not universally supported, it's technically deprecated, and it sometimes exhibits finicky behavior in the test suite. To be safe, you might want to check `e.detail` or `e.location`. Or, to be safest, read the latest in the [`keydown` reference on MDN][keydown]. This would be a good chance to use `console.log()` to check out the value of `e.detail`, `e.which`, and `e.location`.

Also note that we're calling `parseInt` on the key value. This is because the event handler might pass us the string representation of the number, which wouldn't work so well with our comparisons.

## Resources
- [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)
- [MDN — keydown][keydown]

[keydown]: https://developer.mozilla.org/en-US/docs/Web/Events/keydown

<p class='util--hide'>View <a href='https://learn.co/lessons/konami-code-lab'>Konami Code Lab</a> on Learn.co and start learning to code for free.</p>
