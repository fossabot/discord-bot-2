const Discord = require('discord.js')
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter(customisation.footer);
    message.channel.send({embed});

}


exports.help = {
  name: 'help',
  description: 'Megmutatja az összes használható parancsot.',
  usage: 'help [parancs]'
};