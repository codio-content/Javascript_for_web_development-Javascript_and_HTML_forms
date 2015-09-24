If  `window.location.hash` is not empty, meaning there are hash parameters, then we call the function `parseHashArgs` and assign its return value to a variable called `hashes`.

Then we check if there is `section` parameter. If there is one, we hide all sections and then show the one that has the ID given in the `section` parameter.

If there is no `section` parameter given, we display the home page.