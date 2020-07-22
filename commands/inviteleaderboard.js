const arraySort = require('array-sort')
const Discord = require('discord.js')
const table = require('table')
exports.run = async (client, message) => {
    let invites = await message.guild.fetchInvites()

      invites = invites.array();
  
      arraySort(invites, 'uses', { reverse: true });

      let possibleInvites = [['Felhasználó', 'Használat']]; 
      invites.forEach(function(invite) {
          possibleInvites.push([invite.inviter.username, invite.uses]); 
      })
  
      const embed = new Discord.MessageEmbed()
        .setColor(0xCB5A5E)
        .addField('Meghívás Toplista', `\`\`\`${table.table(possibleInvites)}\`\`\``)
      message.channel.send({embed})
  };
  
  exports.help = {
    name: 'inviteleaderboard',
    description: '!',
    usage: 'inviteleaderboard'
  }