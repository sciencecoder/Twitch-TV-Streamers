var users =  ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404", "cretetion"];
 
   
 for(var i = 0; i < users.length; i++) {
$.getJSON("https://api.twitch.tv/kraken/channels/" + users[i]+ "?callback=?",function(data) {
 var stat;
  if(data.status === 422) {
     $("ul").append("<li class='list-group-item stat'>"+  data.message  +  "</li> ")
  }
  
 else if(data.status === null){
   stat = "Offline";
 } else {
   stat = data.game + ":" + data.status;
 }
  
  if(data.status != 422) {
   $("ul").append("<li class='list-group-item offline' id="+ data.name+ ">" +"<a href='" + data.url+ "' target='blank'>" + data.display_name +"</a>" + "<span> "+ stat +"</span>"+ "</li> ")
  }
  
    }) 
 }

