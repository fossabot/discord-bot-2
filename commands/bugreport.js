exports.run = (client, message, args) => {

    if (!args[0]) return message.reply("");
    args = args.join(" ");

    message.reply("Köszi hogy jelentetted a bugot! Hamarosan válaszolunk");

    const content = `**${message.author.username}#${message.author.discriminator}** bejelentette ezt a bugot:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nSzerveren: **${message.guild.name}**\n`;

    client.users.get("561255169090912257").send(content);

}



exports.help = {

  name: 'bug',

  description: 'Bug jelentése.',

  usage: 'bug <bug leírása>'

};