
const customisation = require('../customisation.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Valakit meg kell jelölnöd.').catch(console.error);
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌Erre nincs jogod!");
  
  if (reason.length < 1) reason = 'Nincs ok megadva';

  if (!message.guild.member(user).kickable) return message.reply('Nem tudod őt kickelni');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .setDescription ('Kick')
    .addField('Tag:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderátor:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Ok', reason)
    .setFooter(customisation.footer);

    message.channel.send({embed})  
    message.mentions.users.first().send({embed}).catch(e =>{
      if(e) return 
    });

};

exports.help = {
  name: 'kick',
  description: 'Kickeli a megjelölt embert.',
  usage: 'kick [név] [ok]'
};