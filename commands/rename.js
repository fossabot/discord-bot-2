const Discord = require('discord.js');
const fs = require("fs");


exports.run = (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('Valakit adj meg.');
  }else{
    user = message.guild.member(mention)
  }

  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`Valami hiba történt. Ha bugot jelentesz ezt küldd be mellé:  \`\`\`${e}\`\`\``)
  });
  message.channel.send("Kész.");
};


exports.help = {
  name: 'rename',
  description: 'Valakit átnevez.',
  usage: 'rename @felhasznalo ujnev'
};
