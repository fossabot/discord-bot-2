const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/fox_girl");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`nesze`)
    .setImage(body.url) 
    .setFooter(customisation.footer);
    message.channel.send({embed})
};

  
  exports.help = {
    name: 'kitsune',
    description: 'wata fox girls',
    usage: 'kitsune'
  };