exports.run = (client, message) => {

  message.channel.createOverwrite(message.guild.id, {
    SEND_MESSAGES: null
  });
  message.reply("Siker!");
  };

  exports.help = {
    name: 'unlockdown',
    description: 'Feloldja a lezárást.',
    usage: 'unlockdown'
  };