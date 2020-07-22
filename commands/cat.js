const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor(RANDOM)
    .setTitle("Itt a macskád")
    .setImage(body.file) 
    .setFooter(customisation.footer);
    message.channel.send({embed});
};


  exports.help = {
    name: 'cat',
    description: 'Egy random macska',
    usage: 'cat'
  };
   