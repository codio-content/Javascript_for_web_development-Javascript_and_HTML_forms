As we want a client-side solution, a more JS friendly way of doing this is to use `#` or `#!` after the filename, like this `index.html#ssection=home&view=full`:

If we analyze the different parts :

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

This is very similar to GET parameters except for the `#` sign instead of the `?` but the `#` sign is not handled by the servers and we can read the content of these variables using JS. 

In the top left hand pane, you can see a potential code for parsing this structure of arguments. This code is made of two parts:
1. the `parseHashArgs` function which will extract the hash parameters as described above.
1. the `$(document).ready()` code that will call this function, and check if a parameter called `section` was found in it and then use it to show the correct `div` based on its ID.

