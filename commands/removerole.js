const settings = require('../settings.json');
exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("❌**Hiba:** Nincsen a **Manage Roles** jogom!");
  if (message.mentions.users.size === 0) return message.reply("❌**Hiba:** Valakit jelölj meg!");
  let member = message.guild.member(message.mentions.users.first());
  if (!member) return message.reply("❌**Hiba:** Nem érvényes felhasználó!");
    let rname = message.content.split(" ").splice(2).join(" ");

    let role = message.guild.roles.cache.find(val => val.name === rname);

    if (!role) return message.reply(`❌**Hiba:** ${rname} Nincs ilyen rang!`);
    
    member.roles.remove(role).catch(e => {
      return message.channel.send(`❌**Hiba:** \n${e}`);
    });
    message.channel.send(`*${message.author.username}**, Töröltem a  **${rname}** rangot **${message.mentions.users.first().username}**-ról.`);
}

exports.help = {
  name: 'removerole',
  description: 'Removes a role. It\'s as simple as adding a role.',
  usage: 'removerole'
};
