

const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.guild.fetchBans().then(bans => {
        bans.forEach(user => {
            message.channel.send(`${user.tag} IDje: ${user.id}`);
        });
    });
};

exports.help = {
  name: 'banlist',
  description: 'A kibannoltak listája.',
  usage: 'banlist'
};
