exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Hiba:** Nincs jogod!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`A fenébe, **${message.author.username}** Lezárták a csatornát. Legyél türelemmel hamarosan megnyitják. Remélem`);
  };
  
exports.help = {
  name: 'lockdown',
  description: 'Lezár egy szobát.',
  usage: 'lockdown'
};
