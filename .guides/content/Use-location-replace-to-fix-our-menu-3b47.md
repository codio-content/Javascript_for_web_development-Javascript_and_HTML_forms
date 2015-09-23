{Check It!|assessment}(test-2019918054)


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
  
  <ul id="menu">
    <li data-target="home">Home</li>
    <li data-target="news">News</li>
    <li data-target="about">About</li>
  </ul>
  
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
  <script src="hashparams.js"> </script>
  <script>
    
    $(document).ready(function(){
      if(window.location.hash) {
        checkHashParams();
      } else {
        //by default we go to home.
        //use location replace to go to section "home"
        window.location.replace("example.html#section=home")
        
        checkHashParams();
      }
    });
    
    $("#menu > li").click(function(){
      var section = $(this).data("target");
      
      //use location replace to go to section "section"
      
      
      checkHashParams();
    })
    
  </script>

</body>
</html>
```

|||
