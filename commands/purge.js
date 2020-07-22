exports.run = function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌**Hiba:** Nincs az **Üzenetek kezelése** jogod!");
  if(!args[0]) return message.reply('Használat: purge all|bots|user <mennyit>')

  if(!args[1]) return message.channel.send("Adj meg mennyit kell");
  if(isNaN(args[1])) return message.channel.send("Egy érvényes számot adj meg");
  if(parseInt(args[1]) > 100) return message.channel.send("Max 100 üzenetet tudsz (jövőben lesz több)")


  if(args[0] === 'all') {
    let messagecount = parseInt(args[1]);
    message.channel.messages.fetch({
      limit: 100
    }).then(messages => message.channel.bulkDelete(messagecount))
    .catch(e => {
      if(e) return message.channel.send("Hiba: ", e)
    })
  }
  else if(args[0] === 'bots') {

    message.channel.messages.fetch({
      limit: args[1]
    }).then(messages => {
      const userMessages = messages.filter(message => message.author.bot) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Hiba: ", e)
    })
  }
  else if(args[0] === 'user') {

    message.channel.messages.fetch({
      limit: args[1]
    }).then(messages => {
      const userMessages = messages.filter(message => !message.author.bot) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Hiba: ", e)
    })
  }
  else {
    message.reply('Használat: purge all|bots|user <mennyit>')
  }
};


exports.help = {
  name: 'purge',
  description: 'Kitöröl üzeneteket.',
  usage: 'purge all|bots|user <mennyit>'
};
