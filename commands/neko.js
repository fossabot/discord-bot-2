const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message) => {
    const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Még ez is...  OwO")
    .setImage(body.neko) 
    .setFooter(customisation.footer);
    message.channel.send({embed})
};

  exports.help = {
    name: 'neko',
    description: 'neko?',
    usage: 'neko'
  };
