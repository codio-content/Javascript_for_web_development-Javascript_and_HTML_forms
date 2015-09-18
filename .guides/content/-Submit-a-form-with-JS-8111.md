You can submit an existing form using JS. For example, you could want to submit a form when a user clicks a link that's ouside of the form.

Have a look at the HTML in the file `send-form.html` in top left hand pane. It has a form at the top with and ID of `the-form` but there is no submit button. We also have a link with an ID of `submit-the-form` below the form in the third `p`.

Then, if you look at the JS code at the bottom, you will see :

```
document.getElementById("submit-the-form").onclick = function(){
  document.getElementById("the-form").submit()
}
```

We add a `onclick` handler to the link (as we saw in the previous unit). In the code that's called when you click, we first get the form by it's ID and then we call the `submit` function on it. The `submit` function does exactly what it says, it "submits" the form as if we had clicked on a submit button.
