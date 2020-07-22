exports.run = (client, message) => {
  message.channel.createInvite({unique: true})
  .then(invite => {
  message.reply("Itt a link: https://discord.gg/" + invite.code) });
};

exports.help = {
  name: 'dc',
  description: 'Kiírja a discord linkeket',
  usage: 'dc'
};