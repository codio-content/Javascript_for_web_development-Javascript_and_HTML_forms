The second method to send data to the server is to use the "body" of our request. When we do an HTTP request to the server from our browser, there is in this request a header and a body, like an HTML page. 

 1. The header will contain information like the URL requested, the browser version that asks for it, the time at which the request mas made, etc.
 1. The body will contain the "content" of the request, it was made to transfer the actual information of our request to the server.
 
To send data in the body of our request we use a structure quite similar to the GET.

If we have three parameters to send to the server we just write them in the body of our request like this `param1=val1&param2=val2&param3=val3`

If we analyze the different parts :

$$
{\sf
\underbrace{\text{param1}}_\text{1st parameter name}
\color{blue}{=} 
\underbrace{\text{val1}}_\text{1st parameter value}
\color{red}{\&} 
\underbrace{\text{param2}}_\text{2nd parameter name}
\color{blue}{=} 
\underbrace{\text{val2}}_\text{2nd parameter value}
\color{red}{\&} 
\underbrace{\text{param3}}_\text{2nd parameter name}
\color{blue}{=} 
\underbrace{\text{val3}}_\text{2nd parameter value}
}
$$

What the browser does when we the user submits a form is to encode the values that the user entered in the forms in either GET or POST. It then sends it to the `action` URL provided in the `<form>`. We will not have to encode these values ourselves, all we have to do is to use the `method` parameter of the `<form>` tag to tell the browser which method to use.

We generally use the `POST` method when there are many parameters and we don't want the user to see all those parameters in the URL.

