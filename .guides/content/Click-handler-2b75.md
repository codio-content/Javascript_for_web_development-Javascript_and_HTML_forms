In the highlighted code in the top left hand pane, you can see that we have added a `click` handler on all `li`s inside the `#menu`. 

Because we have only one code to handle the click events from the three items of the menu, we need to know which item was clicked. For that we call the `.data("target")` function on `$(this)` which in the case of a click event handler is a jQuery object targeted at the element that was clicked. We assign to a variable called `section` the value of `data-target` of the `li` that was clicked.

You can see that in this section and the previous one, some code is missing and that the page doesn't work as it should. Let's go to the next section to fix it!