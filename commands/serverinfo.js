const Discord = require('discord.js');

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + " napja";
};
exports.run = (client, message, args) => {
    let verifLevels = ["semmi", "kevés", "közepes", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    
    var emojis;
    if (message.guild.emojis.size === 0) {
        emojis = 'Nincs';
    } else {
        emojis = message.guild.emojis.size;
    }

    const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL)
  .setTimestamp()
  .addField("Készítve", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
  .addField("ID", message.guild.id, true)
  .addField("Király", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("Felhasználók", message.guild.memberCount, true)
  .addField("Emberek", message.guild.members.filter(m => !m.user.bot).size, true)
  .addField("Botok", message.guild.members.filter(m => m.user.bot).size, true)
  .addField("Szerepek", message.guild.roles.size, true)
  .addField("Csatornák", message.guild.channels.size, true)
  .addField("Emojik", `${emojis}/100`, true)
  .addField("Biztonsági szint", verifLevels[message.guild.verificationLevel], true)
  .setColor(Math.floor(Math.random()*16777215))
  message.channel.send({embed});
}

exports.help = {
  name: 'serverinfo',
  description: 'Információk a szerverrről.',
  usage: 'serverinfo'
};