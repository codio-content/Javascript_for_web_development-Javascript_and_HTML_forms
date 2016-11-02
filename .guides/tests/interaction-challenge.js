var fs = require('fs');
var phantom = require('phantom');
var cssutils = require('codio-css-utils');

var fullurl = "file:///home/codio/workspace/interaction-challenge/challenge.html";    
var jqueryurl = "file:///home/codio/workspace/.guides/form-app/public/js/jquery.js";
var errors = [];

//console.log(fullurl);


phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open(fullurl, function (status) {
      //console.log("opened ? ", status);
      page.includeJs(jqueryurl, function(){
        page.evaluate(function () { 
        
          var errors =  [];

          var $buttons =$(".toggle-button");
          var cnt=0;
          
          $buttons.each(function(){
            
            var $b = $(this);
            var b = $b[0];
            
            if(!(b.onclick && (typeof b.onclick === "function"))) {
              errors.push("Button "+cnt+" has a wrong onclick handler")
            }
            
            cnt++;

          })


          return errors;


        }, function (retErrors) {
          
          var allerrors = retErrors.concat(errors)

          if (!allerrors) {
            process.stdout.write("There was a problem running the test");
            ph.exit();
            process.exit(1);
          } else {
            if(allerrors.length <= 0 ) {
              process.stdout.write('Well done!!!')
              ph.exit();
              process.exit(0);
            }
            else {
              process.stdout.write(allerrors.join("\n"))
              ph.exit();
              process.exit(1);
            }
          }

        });
        
      });
    });
  });
});







  
