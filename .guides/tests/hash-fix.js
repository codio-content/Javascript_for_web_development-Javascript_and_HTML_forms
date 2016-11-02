var fs = require('fs');
var phantom = require('phantom');

var fullurl = "file:///home/codio/workspace/hash-params-fix/example.html#sss";    
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

          if (!$("#error").is(":visible")) {
            errors.push("The error should be visible.")
          }



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







  
