const Discord = require('discord.js');
exports.run = async(client, message,args) => {
    if (!args[0]) return message.channel.send("Adj meg valamit");

    const text = args.join("%20");

    if (text.length > 25) return message.reply('A szöveg maximum 25 karakter lehet.');
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(`https://mcgen.herokuapp.com/a.php?i=1&h=Achievement%20Get!&t=${text}`) 
    message.channel.send({embed});
};

exports.help = {
  name: 'achievement',
  description: 'Fake Minecraft idk',
  usage: 'achievement [Üzenet] '
};
