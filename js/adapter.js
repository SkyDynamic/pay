(function(){
   var scale = document.documentElement.clientWidth/targetW;
   var meta =    document.querySelector("meta[name='viewport']");
   meta.content="initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+",user-scalable=no";
})()