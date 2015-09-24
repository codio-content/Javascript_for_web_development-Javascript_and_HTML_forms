What exactly happens when a user submits our simple form from the previous section?

In the graphic below we can see the different steps:

![](.guides/img/Form_path.png)

1. You click on the submit button after having filled the text field with "My name"
1. The browser submits the form to the provided action URL.
1. The server processes the form data and answers with a page saying "Thank you for submitting your form to this address..." 

For step 2. we must have a server running a script that processes the form data and answers with another page. This is not in the scope of this unit and for the rest of this unit, if you need an URL for the `action` property of your `<form>` you can use `https://codio-forms-unit.com`. 