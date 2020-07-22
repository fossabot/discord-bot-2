const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
  let text = args.join(" ");
  if (text < 1) return message.channel.send("❌**Hiba:** Adj meg valamit amit kimondjak..");
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(message.author.username)
  .addField('Üzenet: ', text)
  .setFooter(customisation.footer);
  message.channel.send({embed});
  message.delete();

};

exports.help = {
  name: 'embedsay',
  description: 'Egy Embedben kiírja a megadott üzenetet.',
  usage: 'embedsay [üzenet]'
};
