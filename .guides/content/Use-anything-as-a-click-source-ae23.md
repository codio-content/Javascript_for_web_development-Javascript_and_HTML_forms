We are not obliged to use form elements as click source. We can detect clicks on almost anything in the page, a `<div>`, an `<a>`, an `<img>`.

In the top left hand pane, you can see a file called `anything.html` and its preview underneath.

In this file we first setup a `<div>`, an `<a>` and an `<img>` tag, we assign all of them an id so we can use it later.

On lines 29 to 32 you can see that we assign to the `onclick` property our call to `myFunction` as we did with the `button` in the previous example.

You can see that as we setup the `onclick` handlers the same way for all the calls, we always received a click event as a parameter to our function and can thus display the tag name, and the id of the `target`. 

In a click event, there is always a property called `target` and returns the DOM element that was clicked. In these three cases it will return the `<div>`, the `<a>` and the `<img>` elements, we can then read their `tagName` and `id` properties to display them in our alert window.