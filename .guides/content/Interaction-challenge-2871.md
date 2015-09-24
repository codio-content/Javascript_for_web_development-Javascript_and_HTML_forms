In the top left hand pane, you can find the file `challenge.html` along with its preview underneath.

In this file we have created custom "toggle" buttons using three `div`'s with a CSS class `toggle-button`. We have created all the CSS styles for this to work and some code also.

<table>
<tr><td style="width:70%;">
These buttons should toggle between their "on" and "off" state when we click on them, like in the picture on the right:
</td>
<td>
<img src=".guides/img/toggle-button.png">
</td>
</tr>
</table>

You can see the function `toggleClick`on line 26 which is our click handler for the three buttons, basically it gets the clicked element using `event.target` then it checks if there is already an element with the CSS class `selected` and remove it. Then if the item was not selected it adds the `selected` class on it.


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

