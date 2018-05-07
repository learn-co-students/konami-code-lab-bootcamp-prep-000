# Konami Code Lab

## Objectives
1. Practice using event listeners.
2. Explain how event listeners are triggered.
3. Capture user interactions to trigger events on a page.

## Instructions
In `konami_code.js`, you'll notice that we've provided very little: well, nothing except -- what's that? If you open the file up in your text editor, you should see:
```js
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
  // your code here
}
```

But what could those keycodes be? They're the famous [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), as JavaScript KeyboardEvent keys. It's become a common Easter egg for sites to have hidden features behind this code, and now it's your turn to implement it!

In `index.html`, you'll see that we're loading the file in for you:
```html
<script src="konami_code.js"></script>
```

This is JavaScript's way of pulling in code from outside the page. Here, we've given the `<script>` tag a local source (the file that's right here in the directory), but we could also supply a URL to load an external resource (more on that in a bit).

You'll want to attach an event listener to `document.body` and check for `'keydown'` events. If the user enters this special code, pressing all ten of the keys in the correct order, `alert()` a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't `alert()` anything and simply keep listening for all ten `keydown`s in the correct order.

When you're testing the code out in the browser, be sure to call `init()` to attach the event listener and set everything up!

Stuck on how to get started? Here's a contrived, short example:
```js
// Keys for A, B, and C keys.
const alphabet = ['a', 'b', 'c'];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;

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
`KeyboardEvent` has gotten lots of recent updates. The `key` and `code` properties recently replaced `which`, `keyCode`, and `charCode` properties, which were often implemented slightly differently between different browsers and would report different values across different operating systems. Some environments (node in particular) don't know about `KeyboardEvent`


## Resources
- [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)
- [MDN - KeyboardEvent][KeyboardEvent]
- [MDN — keydown][keydown]

[keydown]: https://developer.mozilla.org/en-US/docs/Web/Events/keydown
[KeyboardEvent]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

<p class='util--hide'>View <a href='https://learn.co/lessons/konami-code-lab'>Konami Code Lab</a> on Learn.co and start learning to code for free.</p>
