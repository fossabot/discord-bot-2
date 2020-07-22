const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (args.length < 1) return message.reply("Valamit meg kell adnod hogy szavazást készíts!")
  if (!message.content.includes("?")) return message.reply("Legyen egy ? a mondatodban!")
    message.channel.send(`**  ${message.author.username} Szavazást indított! Válaszolj a reakciókkal.** `);
    const pollTopic = await message.channel.send(args.join(" "));
    pollTopic.react(`✅`);
    pollTopic.react(`❌`);
};

exports.help = {
    name: 'vote',
    description: 'Szavazást indít',
    usage: 'vote'
  };