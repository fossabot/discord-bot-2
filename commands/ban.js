const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send('Meg kell jelölnöd valakit');

  if (user.id === client.user.id) return message.channel.send("XD te hülye");

  if (reason.length < 1) reason = 'Nincs ok megadva';


    const embed = new Discord.MessageEmbed()
    .setColor(RANDOM)
    .setTimestamp()
    .addField('Őt bannolták:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Admin:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Ok', reason)
    .setFooter(customisation.footer);

    message.mentions.users.first().send({embed});

    message.guild.members.ban(user.id, {reason: reason});

    message.channel.send({embed})


};

exports.help = {
  name: 'ban',
  description: 'Kitiltja a megjelölt felhasználót.',
  usage: 'ban [felhasználó] [ok]'
};
