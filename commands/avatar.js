const Discord =  require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
      const embed = new Discord.MessageEmbed()
      .setColor(0xFFFF00)
      .setTitle(`Avatarja:`)
      .setImage(`${avatar}?size=2048`)
      .setFooter(customisation.footer);
      message.channel.send({embed}).catch(e => { return message.channel.send(`❌**Hiba:** \n${e}`); });;
    }


exports.help = {
  name: 'avatar',
  description: 'Egy felhasználó avatarja.',
  usage: 'avatar <felhasználó>'
};
