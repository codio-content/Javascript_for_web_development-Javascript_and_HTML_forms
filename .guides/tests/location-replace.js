var grasp = require('grasp');
var cheerio = require('cheerio')
var fs = require('fs');
var _ = require('underscore')

var base_path = "/home/codio/workspace/"
var file_path = base_path + "reloading-changing/example.html"

var html_content = fs.readFileSync(file_path).toString('utf8');
var $ = cheerio.load(html_content);
var script_content = "";
var errors = [];

$("script").each(function() {
  script_content+=$(this).text();
});


var equerySearch = grasp.search('equery');
var squerySearch = grasp.search('squery');

try {

  var results = equerySearch('window.location.replace( __ )', script_content);
  

  if (results.length <= 0) {
    errors.push("We didn't find any call to window.location.replace.")

  } else if (results.length == 2) {

    var firstcall = results[0]
    var secondcall = results[1]

    var fcarg = firstcall.arguments[0]
    var scarg = secondcall.arguments[0]
    
    //console.log(fcarg)
    //console.log(scarg)
    
    

    if (fcarg.type != "Literal") {
      errors.push("The argument of the first call to window.location.replace call doesn't seem to be correct.")
    } 
    
    if(fcarg.value.trim() != "example.html#section=home" ) {
      errors.push("The argument of the first call to window.location.replace is wrong")
    }
    
    
    
    
    
    if (scarg.type != "BinaryExpression") {
      errors.push("The argument of the second call to window.location.replace doesn't seem to be correct. Should be BinaryExpression.")
    } 
    
    if (scarg.left.type != "Literal") {
      errors.push("The argument of the second call to window.location.replace doesn't seem to be correct. Left operand should be Literal")
    }  
    
    if (scarg.right.type != "Identifier") {
      errors.push("The argument of the second call to window.location.replace doesn't seem to be correct. Right operand should be Identifier")
    }  
      
    if(scarg.right.name != "section" ) {
      errors.push("The parameter of the second call to window.location.replace is wrong. Right operand should have name 'section'")
    }
      
    if(scarg.left.value != "example.html#section=" ) {
      errors.push("The parameter of the second call to window.location.replace is wrong. Left operand should have value 'example.html#section='")
    }
    
    if(scarg.operator != "+" ) {
      errors.push("The parameter of the second call to window.location.replace is wrong. Left operand should have value 'example.html#section='")
    }
    
  
  } else {
    errors.push("There should be two calls to window.location.replace.")
  }
  
  
} catch (e) {
  errors.push("Something is wrong or missing in your code.");
  console.log(e);
}

if( errors.length <= 0 ) {
  process.stdout.write('Well done!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}