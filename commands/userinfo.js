const moment = require('moment');
const Discord = require('discord.js');

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days +  "napja";
};
exports.run = async (client, msg, args) => {
  let user = msg.mentions.users.first();
  let muser = msg.guild.member(msg.mentions.users.first());
    if (!muser) muser = msg.member;
    if(!user) user = msg.author;
  const embed = new Discord.RichEmbed();
  embed.addField("Név", `${user.username}#${user.discriminator}`, true)
          .addField("ID", `${user.id}`, true)
          .setColor(3447003)
          .addField('Jelenleg ', `${muser.presence.status.toUpperCase()}`, true)
          .addField('Játékban ', `${muser.presence.game === null ? "Nem játszik semmivel" : muser.presence.game.name}`, true)
          .addField('Csatlakozott a discordhoz', `${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`, true)
          .addField('Csatlakozott a szerverhez ', `${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`, true)
          .addField('Szerep ', `${muser.roles.array()}`, true)
          .addField('Bot?', `${user.bot.toString().toUpperCase()}`, true)
      msg.channel.send({embed});
}

exports.help = {
  name: 'userinfo',
  description: 'Infók egy emberről.',
  usage: 'userinfo <@user>'
};
