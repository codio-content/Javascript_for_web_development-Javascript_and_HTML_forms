HTML forms are a powerful tool to interact with the users of our pages. They allow us to let our users enter informations, make choices and click on buttons.

In the following sections we will see how to create a form as well as the different elements we can put in a form.

Let's start with a very basic HTML form:

```
<form action="https://codio-forms-unit.com">
  <input type="text" name="myname" />
  <button type="submit">Send your name</button>
</form>
```

A form is always wrapped between a opening `<form>` tag and a closing `</form>` tag, it must have a `action` property with a valid URL of a receiving script on a server.

A form is composed of at least one widget. A widget is an HTML element like a text field, a select box, a check box, etc. Most forms are composed of multiple widgets accompanied by labels.

In the example above, we have one `<input>` and one `<button>` widgets.
- The input is of type `text` and has an ID of `name`
- The button is of type `submit` and that means that it will submit the form to the action URL.

In the left hand panes, you can find a working implementation of this simple form, the code on the top, the preview underneath.

Go ahead and type your name in the preview, then click the button "Send your name".
You can refresh the preview window if you want to try again.