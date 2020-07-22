const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Valakit jelölj meg :3");
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} megpuszilta ${message.mentions.users.first().username}t >:3`)
    .setImage(body.url) 
    .setFooter(customisation.footer);
    message.channel.send({embed})
};

  
  exports.help = {
    name: 'kiss',
    description: 'Megpuszil valakit OwO',
    usage: 'kiss <felhasználó>'
  };
