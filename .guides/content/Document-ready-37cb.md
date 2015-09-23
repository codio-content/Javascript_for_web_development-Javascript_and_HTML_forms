In the highlighted code in the top left hand pane, you can see that we have put a `document.ready` handler, it checks that there are some hash parameters in the URL: 
- If yes, it calls calls the `checkHashParams` function. 
- If there is no hash parameters, we should display the home page by default and change the hash parameters to `section=home` in the URL.
