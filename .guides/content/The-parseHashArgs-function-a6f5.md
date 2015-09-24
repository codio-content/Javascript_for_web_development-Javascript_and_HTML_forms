We first create a variable that will hold the variables we find in the hash parameters.
The next line is quite complex: `var hashes = window.location.hash.slice(1).split('&')`. `window.location.hash` return the hash portion of the page's URL.Then we have two calls :

1. The `slice(1)` function removes the first character of the string.
`#section=news&view=all` -> `section=news&view=all`

2. The `split(delimiter)` function splits a string into an array, and it splits everytime it sees the given delimiter string.
`section=news&view=all` -> `Array("section=news","view=all")`


Then `for` all the entries in this array we do `var hash = hashes[i].split('=')`.

`"section=news"` -> `Array('section','news')` and then `"view=all"` -> `Array('view','all')`

Then if this array has more than one entry, we take the first entry as the name and the second entry as the value and save it all to the `vars` variable that we return at the end of the loop.