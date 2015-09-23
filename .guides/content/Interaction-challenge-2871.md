{Check It!|assessment}(test-2147974341)

|||guidance

Solution :

```
<!DOCTYPE html>
<html>
<head>
  <title>Using anything as click source</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  I am the first button <div class="toggle-button"> </div> <br><br>
  I am the second button <div class="toggle-button"> </div> <br><br>
  I am the third button <div class="toggle-button"> </div> <br><br>
  Only one of us can be clicked at the same time!
 
  
  <br>
  <script>
    
    var buttons = document.querySelectorAll(".toggle-button")
    
    for (var i=0;i<buttons.length;i++) {
      buttons[i].onclick = toggleClick
    }
    
    
    //called when a user click on a button
    function toggleClick(event) {
      var it = event.target;
      
      //if there is a selected, we remove it
      var selected = document.querySelector(".selected")
      if (selected) {
        selected.classList.remove('selected')
      }

      if (it!=selected){
        //then we select the one we clicked.
        it.classList.add('selected')
      }
      
    }
    
    
  </script>

</body>
</html>

```

|||

