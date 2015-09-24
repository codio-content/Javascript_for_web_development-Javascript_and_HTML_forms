In the top left hand pane, we have a file called `button.html` along with its preview underneath.

In this page we have three `button`'s and we use them with JS in three different ways:

1. For the first button we have written directly on the button `onclick=myFunction();`.

2. In the second one we assign our `myFunction` to the onclick handler of `#mybutton2` (see line 45).

3. In the third one we assign our `myFunction` to the onclick handler of `#mybutton2` using an anonymous function that allows us to pass parameters to `myFunction` when calling it (see line 48).

Our myFunction (declared on line 21) just checks if it received a value in param and displays the value along with its type and uses alert to show it.


You will notice when clicking on each of the buttons that:
1. The first button doesn't pass any parameter to `myFunction`
2. The second button gives the click event has a parameter to `myFunction`
3. The last option allows us to pass our own parameter value : `Hello!`