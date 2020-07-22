const settings = require('../settings.json');

exports.run = (client, message) => {

    if (message.channel.type === "dm") return client.users.cache.get("561255169090912257").send(`${message.author.id}, ${message.author.username}: ${message.content}`);
    if (message.author.bot) return;
    if (message.content.startsWith(client.user.id)) return message.channel.send('Szia! A kezdéshez írd be hogy /help.');



    if (!message.content.startsWith(settings.prefix)) return;  
  
    let command = message.content.split(' ')[0].slice(1);
    let params = message.content.split(' ').slice(1);
    let cmd;
    
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
      cmd.run(client, message, params);
      client.log(`Command: ${settings.prefix}` + cmd.help.name + " - Guild: " + message.guild.name + " ID: " + message.guild.id)
    }



};