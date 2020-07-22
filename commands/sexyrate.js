const Discord = require('discord.js');
exports.run = (client, message) => {

  const person = message.mentions.members.first();
  
  if (!person) return message.channel.send(`Adj meg valakit!`);
  
  const rate = Math.floor(Math.random() * 100) == 0 ? 1 : Math.floor(Math.random() * 100);
  const embed = new Discord.RichEmbed()
    .setFooter(client.user.username)
    .setDescription(`Szerinteem, ${person.user.username} ${rate}%-ra sexy!`)
    .setThumbnail(message.author.avatarURL);
  message.channel.send(embed);
  message.delete();

};
exports.help = {
  name: 'sexyrate',
  description: 'Nem én találtam ki',
  usage: 'sexyrate [@felhasználó]'
};
