The page from the previous section works just fine but there is still a little problem, what happens if we use a wrong section argument, for example `example.html#section=thisisnotasection` or `example.html#thisiswrong` ?

We didn't quite think about that? It displays a white page ... You can try it in the bottom left hand pane

A simple way to fix it, would be to check at the end of the current code to see if we do have a section visible, if we don’t have any visible section, then we could display an error message.

With jQuery we can use the `:visible` after any selector and it will only return the ones that are visible. So if we use `$('.section:visible')`. It will return all the `div`'s which have class `section` and are visible. The rest is simple, if there is no section visible, we display an error message. In jQuery we do that by testing the length of the jQuery object, so `$('.section:visible').length()` will return the number of visible `div`'s with class `section`. 

{Check It!|assessment}(test-3262020852)


|||guidance

Solution :

```
<!DOCTYPE html>
<html>
<head>
  <title>Hash params</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <div id="home" class="section">
    Home page
  </div>
  <div id="news" class="section">
    News page 
  </div>
  <div id="about" class="section">
    About page 
  </div>
  <div id="error">
    Error : This section doesn't exist!
  </div>
  
  <script src="/.guides/form-app/public/js/jquery.js"> </script>
  <script>
    function parseHashArgs(aURL) {
      var vars = {}
      var hashes = window.location.hash.slice(1).split('&');

      for(var i = 0; i < hashes.length; i++) {
         var hash = hashes[i].split('=')

         if(hash.length > 1) {
             vars[hash[0]] = hash[1]
         } else {
            vars[hash[0]] = null
         }      
      }

      return vars
    }
    
    $(document).ready(function(){
      if(window.location.hash) {
        var hashes = parseHashArgs(window.location.href)
        
        if(hashes.section) {
          $(".section").hide()
          $("#"+hashes.section).show()
        } 
        
      } else {
        $('#home').show()
      }
      
      //your code here
      if ($('.section:visible').length <= 0) {
        $("#error").show()
      }
      
    });
    
  </script>
  
  
  
  
</body>
</html>



        
```

|||

