In the top left hand pane, we have a file called `button.html` along with its preview underneath.

In this page we have three `button` and we use them with JS in three different ways :

1. For the first button we have written directly on the button `onclick=myFunction();`

2. In the second one we assign on line 45 of `button.html` our `myFunction` to the onclick handler of `#mybutton2`

3. In the second one we assign on line 45 of `button.html` our `myFunction` to the onclick handler of `#mybutton2` using an anonymous function that allows us to pass parameters to `myFunction` when calling it.

Our `myFunction` declared on line 21 just check if it received an value in `param` and display the value along with its type and use `alert` to show it.


You will notice when clicking on each of the buttons that:
1. The first button doesn't pass any parameter to `myFunction`
2. The second button do pass the click event has a parameter
3. The last option allows us to pass our own param value : `Hello!`