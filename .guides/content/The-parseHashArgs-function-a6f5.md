We first create a variable that will hold the variables we find in the hash parameters.
The next line is quite complex: `var hashes = aURL.slice(aURL.indexOf('#') + 1).split('&') `. We can decompose it in two : `aURL.slice(aURL.indexOf('#') + 1)`

1. The `slice(index)` function removes the beginning of a string up to the index given.
`index.html#section=news&view=all` -> `section=news&view=all`

2. The `split(delimiter)` function splits a string into an array, and it splits everytime it sees the given delimiter string.
`section=news&view=all` -> `Array("section=news","view=all")`


Then `for` all the entries in this array we do `var hash = hashes[i].split('=')`.

`"section=news"` -> `Array('section','news')` and then `"view=all"` -> `Array('view','all')`

Then if this array has more than one entry, we take the first entry as the name and the second entry as the value and save it all to the `vars` variable that we return at the end of the loop.