// Define a fake afterpaste event: (Works by allowing browser to complete the clipboard action before raising custom event)
$('HTML').live('paste', function(e){
  e = $.extend({},e,{type:'afterpaste'});
  window.setTimeout(function(){ $(e.target).trigger(e) },0);
});

// Define a fake aftercut event: (Works by allowing browser to complete the clipboard action before raising custom event)
$('HTML').live('cut', function(e){
  e = $.extend({},e,{type:'aftercut'});
  window.setTimeout(function(){ $(e.target).trigger(e) },0);
});