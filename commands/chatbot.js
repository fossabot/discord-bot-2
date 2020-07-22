const cleverbot = require("cleverbot-free");
const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
  
  if (args.length < 1) return message.channel.send('Adjál meg egy üzenetet');
  cleverbot(args).then(response => {
  message.channel.send(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle('Chatbot')
    .addField('Válasz: ', response)
    .setFooter(customisation.footer));
  });

  
};



exports.help = {
  name: 'chatbot',
  description: 'Chatel veled. BÉTA!.',
  usage: 'chatbot'
};
