Here are two very useful functions for this unit.

First we have `window.reload()` which will reload the window, as if you had pressed the reload or refresh button.

Then we have the function `window.location.replace(<url>)`. We can call this function with an URL and the browser will navigate to that page as if you had entered an address in the top URL bar of your browser.

For example you could write: `window.location.replace('https://www.codio.com')` and the browser would navigate to Codio's website.

Using `window.location.replace` we could add a menu to our previous example that was using hashtags to navigate between the three pages of the site.