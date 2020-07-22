const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async (client, message, args, tools) => {
    if (!args[0]) return message.reply("Be kell írnod valamit :)")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/owoify?text=" + args.join('%20'));
    
    
    message.channel.send(body.owo)
};


exports.help = {
  name: 'owoify',
  description: 'owoify',
  usage: 'owoify'
};
