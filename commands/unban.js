const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = args[0];
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: Neked erre nincs jogod!!");
  if (!user) return message.channel.send('Meg kell adnod egy UID-t.').catch(console.error);
  message.guild.unban(user).catch(e =>{
    if(e){
      return message.channel.send("Ő nincs bannolva. MÉG! :wink:");
    }
    message.channel.send(client.users.get(args[0]).username + 'unbannolva');

    message.channel.createInvite({unique: true}.then(invite => { client.users.get(args[0]).send("Itt a link: https://discord.gg/" + invite.code) }));
  });;

};

exports.help = {
  name: 'unban',
  description: 'Unbanol valakit.',
  usage: 'unban [id]'
};
