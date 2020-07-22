const customisation = require('../customisation.json');
const Discord = require('discord.js');

exports.run = (client, message) => {
  message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(customisation.about)
  .setFooter(customisation.footer);
  message.channel.send({embed});
    
};

exports.help = {
    name: 'about',
    description: 'Info a botról.',
    usage: 'about'
};