Konami Code Lab
---

## Objectives

1. Practice using event listeners
2. Explain how event listeners are triggered
3. Capture user interactions to trigger events on a page

## Instructions

In `konami_code.js`, you'll notice that we've provided very little: well, just about nothing except -- what's that? If you open the file up in your text editor, you should see

```javascript
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
}
```

But what could those numbers be? They're the famous [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), as keyboard event values. It's become a common Easter egg for sites to have hidden features behind this code, and now it's your turn to implement it!

In `index.html`, you'll see that we're loading the file in for you:

``` html
<script src="konami_code.js"></script>
```

This is JavaScript's way of pulling in code from outside the page. Here, we've given the `<script>` tag a local source (the file that's right here in the directory); but we could also supply a URL to load an external resource (more on that in a bit).

You'll want to attach an event listener to `document.body` and check for `'keydown'` events. If the user enters this special code, `alert()` a congratulatory message. But if they start entering anything else anywhere along the way, don't trigger anything out of the ordinary.

When you're testing the code out, be sure to call `init()` to set everything up!

Stuck on how to get started? Here's a contrived, short example:

``` javascript
const alphabet = ['a', 'b', 'c']

// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === alphabet[index]) {
    index++

    if (index === alphabet.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}
```

Have fun!

## Hints

Be aware that we're looking at both `e.detail` and `e.which`. In browsers nowadays, `e.which` is usually sufficient; however, I'll be honest with you: it's not universally supported, it's technically deprecated, and it doesn't work with our tests. So check `e.detail` too, please. :)

Also note that we're calling `parseInt` on the key value. This is because the event handler might pass us the string representation of the number, which wouldn't work so well with our comparisons.

## Resources

- [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)
