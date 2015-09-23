You can see that we have put all the code that handles the hash variables from the URL in a JS file called `hashparams.js`. 

This file is open in the top left hand pane. It contains two functions: `parseHashArgs` and `checkHashParams`.

1. The `parseHashArgs` function checks the hash parameters in the URL and returns an object that contains the found hash parameters.

1. The `checkHashParams` function will call `parseHashArgs` to get the hash data and hide or display divs according to what it found in the `section` parameter of the data.