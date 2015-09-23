var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/your-first-form/challenge.html'

if (!fs.existsSync(path)) {
  errors.push("challenge.html doesnt exist.")
} else {
  var $ = cheerio.load(fs.readFileSync(path));
  
  var $form = $("form");
  
  if($form && $form.length == 1) {
    
    if($form.attr("action")) {
      
      if ($form.attr("action").trim() != "https://codio-forms-unit.com") {
        errors.push("The action parameter of the form is incorrect.")
      } else {
        
        $input_fn = $form.find("input[name=firstname]")
        $input_ln = $form.find("input[name=lastname]")
        $button = $form.find("button[type=submit]")
        
        if(!($input_fn && $input_fn.length == 1 && $input_fn.attr("type")=="text")) {
          errors.push("The input for firstname is incorrect.")
        }
        
        if(!($input_ln && $input_ln.length == 1 && $input_ln.attr("type")=="text")) {
          errors.push("The input for lastname is incorrect.")
        }
        
        if(!($button && $button.length == 1 && $button.text().length > 1)) {
          errors.push("The submit button is incorrect.")
        }

      }
      
      
    } else{
      errors.push("There is no action on the form.")
    }
    
    
  } else {
    errors.push("There should be one form.")
  }
    
}


if( errors.length <= 0 ) {
    process.stdout.write('Well done!!!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}
