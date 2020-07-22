const Discord = require('discord.js');
var request = require('request');
exports.run = (client, message,args) => {
	if(args.lenght < 2) return message.channel.send("Használat: mcserver <ip> <port>")
  var url = 'http://mcapi.us/server/status?ip=' + args[0] + '&port=' + args[1];
  	request(url, function (err, response, body) {
    
    if (err) {
      console.log(err);
      return message.reply('Ez kínos. Valami hiba történt. ');
    }
      
    body = JSON.parse(body);
    var status = "Offline"
    var color = 16711680
    if (body.online) {
      status = "Online";
      color = 65280
    }
    var players = 0
    if (body.players.now) {
      players += body.players.now;
    }
    else {
      players += 0
    }
	
	const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(' Infobot')
    .addField('Állapot:', status, true)
    .addField('Játékosok:',"**" + body.players.now + "** / **" + body.players.max + "**",true)
    .setFooter('IP: ' + args[0] + ':' + args[1]);
    message.channel.send({embed})
  
})
	  
	  
  

  
  

};
exports.help = {
  name: 'mcserver',
  description: 'Info a Minecraft Szerverről',
  usage: 'mcserver <ip> <port>'
};