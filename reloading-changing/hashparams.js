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

function refreshHashParams(){
  var hashes = parseHashArgs(window.location.href)

  if(hashes.section) {
    $(".section").hide()
    $(".selected").removeClass("selected")
    $("#"+hashes.section).show()
    $("#menu > li[data-display="+hashes.section+"]").addClass("selected")
  } else {
    $("#error").show()
  }

}
    