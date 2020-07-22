const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setTitle('Válsztás')
  .addField('A kiválasztott:  ', message.guild.members.random());

  message.channel.send({embed});

  
};



exports.help = {
  name: 'pickmember',
  description: 'Random kiválaszt egy embert.',
  usage: 'pickmember'
};
