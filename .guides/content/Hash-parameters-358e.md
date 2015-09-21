We can't use server side arguments in this case (we would risk creating unwanted interactions with the server). We want a client-side solution, a more JS friendly way of doing this is to use `#` or `#!` after the filename, like this:

$$
{\sf
\underbrace{\text{index.html}}_\text{filename or url}
\color{orange}{\#}
\underbrace{\text{section}}_\text{1st name}
\color{blue}{=} 
\underbrace{\text{home}}_\text{1st value}
\color{red}{\&} 
\underbrace{\text{view}}_\text{2nd name}
\color{blue}{=} 
\underbrace{\text{full}}_\text{2nd value}
}
$$

These signs are not handled by the servers and we can read the content of these variables using JS. In the top left hand pane you can see a potential code for parsing this structure of arguments. This code is made of two parts:
1. the `parseHashArgs` function which will extracts the hash parameters as described above.
1. the `$(document).ready()` code that will call this function, and check if a parameter called `section` was found in it and then use it to show the correct `div` based on its ID.

### 1. The parseHashArgs function:

We first create a variable that will hold the variables we find in the hash parameters.
The next line is quite complex : `var hashes = aURL.slice(aURL.indexOf('#') + 1).split('&') `. We can decompose it in two : `aURL.slice(aURL.indexOf('#') + 1)`

1. The `slice(index)` function removes the beginning of a string up to the index given.
`index.html#section=news&view=all` -> `section=news&view=all`

2. The `split(delimiter)` function splits a string into an array, and it splits everytime it sees the given delimiter string.
`section=news&view=all` -> `Array("section=news","view=all")`


Then `for` all the entries in this array we do `var hash = hashes[i].split('=')`.

`"section=news"` -> `Array('section','news')` and then `"view=all"` -> `Array('view','all')`

Then if this array has more than one entry, we take the first entry as the name and the second entry as the value and save it all to the `vars` variable that we return at the end of the loop.


### 2. The document.ready handler

If  `window.location.hash` is not empty, meaning there are hash parameters, then we call the function `parseHashArgs` and assign its return value to a variable called `hashes`.

Then we check if there is `section` parameter, if there is one, we hide all sections and then show the one that has the ID gived in the `section` parameter.

If there is no `section` parameter given, we display the home page.



