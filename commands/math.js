const Discord = require('discord.js');
const math = require('mathjs');
exports.run = (bot, message, args) => {
  if (!args) return send(`Adj meg egy műveletet amit meg akarsz oldani.`);
  let whatto = args.join(` `);
  try {
    let result = math.evaluate(whatto).toString();
  
     const embed = new Discord.MessageEmbed()
                    .setTitle("Matek Megoldás")
                    .addField(`Feladat:`,whatto, true)
                    .addField(`Eredmény:`, result, true);
     message.channel.send({embed});
     message.delete();
   } catch (e) {
     return message.channel.send('Szerintem ez nem megoldható.')
   }
  
};

exports.help = {

  name: 'math',

  description: 'Megold egy egyenletet',

  usage: 'Math [Egyenlet]'

};
