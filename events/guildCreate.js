const Discord = require('discord.js');
exports.run = (client,guild) => {
    const defaultChannel = guild.channels.find(channel => channel.permissionsFor(client.user).has("SEND_MESSAGES"));
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage("https://mcgen.herokuapp.com/a.php?i=32&h=K%C3%B6sz%C3%B6n%C3%B6m%21&t=Megh%C3%ADvt%C3%A1l+a+szerverre%21") 
    defaultChannel.send({embed});
}
