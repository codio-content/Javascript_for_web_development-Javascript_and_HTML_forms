A common problem in JS web pages, is that because JS is used to change the page's content dynamically, it's impossible to link directly to a specific page with its content.

Let's imagine we have a page `index.html` with a menu on the left, when you click on an entry in the menu, some JS code loads a different content in the page. So basically you have multiple pages in one. How do you link to a subpage ? Because the only URL we have is `http://somesite.com/index.html` ?

If we have 3 items in our menu:
- Home
- News
- About

Then we need a way to be able to access these 3 sections using some URL:

A classical way to transmit informations on the web is to use GET parameters.
Nevertheless using GET parameters uses server side processing.

Here is an example of using GET parameters in our case :

$$
{\sf
\underbrace{\text{index.html}}_\text{filename or url}
\color{red}{?}
\underbrace{\text{section}}_\text{1st name}
\color{blue}{=} 
\underbrace{\text{home}}_\text{1st value}
\color{red}{\&} 
\underbrace{\text{view}}_\text{2nd name}
\color{blue}{=} 
\underbrace{\text{full}}_\text{2nd value}
}
$$




