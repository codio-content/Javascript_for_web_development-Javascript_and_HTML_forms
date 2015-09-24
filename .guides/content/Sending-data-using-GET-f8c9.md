The first method to send data to the server is to use the URL.

When we send a request to the server we have to give it the URL of the resource we want. The server is capable of reading and understanding this URL in order to serve us with the correct file. We can then add some text at the end of the URL in a structured way in order to transmit to the server extra information.

For example, we are requesting the file `index.html` from the server and we want to tell the server that the current user is "john" and that the current page is "news".

If we want to use the GET method, we should write it like this: `index.html?user=john&page=news`

If we analyze the different parts :

$$
{\sf
\underbrace{\text{index.html}}_\text{filename or url}
\color{orange}{?}
\underbrace{\text{user}}_\text{1st name}
\color{blue}{=} 
\underbrace{\text{john}}_\text{1st value}
\color{red}{\&} 
\underbrace{\text{page}}_\text{2nd name}
\color{blue}{=} 
\underbrace{\text{news}}_\text{2nd value}
}
$$

So first we put a `?` sign after the URL then we delimit our parameters using `&`.

Then our scripts running on the server can extract this information. It's a standard way of sending data to the server. The only “inconvenience” of this method is that the data is visible in the browser bar and to the user.

In general, we use GET parameters when there is a small number of parameters and when the user can be interested in seeing it in the URL and changing it by himself.