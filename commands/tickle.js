const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message) => {
    if (!message.mentions.users.first()) return message.reply("Valakit jelölj meg");
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.mentions.users.first().username}, megcsikizett ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(customisation.footer);
    message.channel.send({embed})
};

  
  exports.help = {
    name: 'tickle',
    description: 'megscikiz valakit',
    usage: 'tickle <@felhasznalo>'
  };