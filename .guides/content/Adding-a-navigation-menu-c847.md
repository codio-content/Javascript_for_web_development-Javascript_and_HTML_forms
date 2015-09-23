In the top left hand pane there is a file called `example.html`. We have prepared the work to implement a menu which links to the three pages of our site : home, news and about. In the bottom left hand preview page, you can see that our page doesn't work as it should, we will fix it but first we have to understand what's going on in it.

On the HTML side of things, we have only added an `ul` (on line 9) that contains the navigation menu. The `data-target=""` parameters that you see on each `li` is an easy way of transmitting data to jQuery.

|||info

### The jQuery .data() function

Any parameter that you put on an HTML tag that begins with `data-` can be fetched from jQuery using the `.data()` function.

For example you fecth `<li data-something="3">` by using `.data("something")` or you fetch `<li data-mytime="12">` by using `.data("mytime")` on a jQuery object that matches the `li`.

|||

Let's continue analysing the page in the left hand panes.