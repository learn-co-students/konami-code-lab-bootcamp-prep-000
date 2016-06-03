Konami Code Lab
---

## Objectives

1. Practice using event listeners
2. Explain how event listeners are triggered
3. Capture user interactions to trigger events on a page

## Instructions

In `index.html`, you'll notice that we've provided very little: well, just about nothing except -- what's that? If you open the file up in your text editor, you should see

```html
<script>
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  // your code here
</script>
```

That's right, you can write your code inline in the HTML file -- and that's just what we're going to do.

You'll want to attach an event listener to `document.body` and check for `'keydown'` events. If the user enters this special code, `alert()` a congratulatory message. But if they start entering anything else anywhere along the way, don't trigger anything out of the ordinary.

Stuck on how to get started? Here's a contrived, short example:

``` javascript
const alphabet = ['a', 'b', 'c']

// keep track of index outside of the event handler
let index = 0

// unattached event handler
function onKeyDownHandler(e) {
  if (e.which === alphabet[index]) {
    index++

    if (index === alphabet.length - 1) {
      alert("YOU DID IT!")
    }
  } else {
    index = 0
  }
}
```

But what could those numbers be? They're the famous [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), as keyboard event values. It's become a common Easter egg for sites to have hidden features behind this code, and now it's your turn to implement it!

Have fun!

## Resources

- [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)
