const { stripIndents } = require('common-tags');


exports.run = (client, message) => {
    client.guilds.map(guild => message.channel.send(stripIndents`
    Név: ${guild.name}
    Tulaj: ${guild.owner.user.tag} (${guild.owner.id})
    Felhasználók: ${guild.members.size}
    Emberek: ${guild.members.filter(u => !u.user.bot).size} (${Math.floor(guild.members.filter(u => !u.user.bot).size / guild.members.size * 100)}%)
    Botok: ${guild.members.filter(u => u.user.bot).size} (${Math.floor(guild.members.filter(u => u.user.bot).size / guild.members.size * 100)}%)`));

  };
  
  exports.help = {
    name: 'listguilds',
    description: '!',
    usage: 'listguilds'
  }
  //    Default Channel: #${guild.defaultChannel.name} (${guild.defaultChannel.id})