const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    link = body.url;
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Here's Your Dog")
    .setImage(body.url) 
    .setFooter(customisation.footer);
    message.channel.send({embed})
};


  
  exports.help = {
    name: 'dog',
    description: 'Sends a random doggo',
    usage: 'dog'
  };
