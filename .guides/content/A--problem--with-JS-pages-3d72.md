A common difficulty in JS web pages, is that because JS is used to change the page's content dynamically, it's impossible to link directly to a specific page with its content.

Let's imagine we have a page `index.html` with a menu on the left, when you click on an entry in the menu, some JS code loads a different content in the page. So basically you have multiple pages in one. How do you link to a subpage ? The only URL we have is `http://somesite.com/index.html` ?

Let say we have 3 items in our menu:
- Home
- News
- About

Then we need a way to be able to access these 3 sections using some URL.

A classical way to transmit informations on the web is to use GET parameters as we have seen previously. The problem of using GET parameters is that the server also understands the GET parameters and will also react to it. We want a way to add to the URL that doesn't interfere with the server.
