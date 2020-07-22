const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Adj meg egy helyet!**')
          return;
      }

      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Az időjárás itt: ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Időzóna',`UTC${location.timezone}`, true)
          .addField('Hőmérséklet',`${current.temperature}°C`, true)
          .addField('Szél: ',current.winddisplay, true)
          .addField('Páratartalom', `${current.humidity}%`, true)
          message.channel.send({embed});
  })

};

exports.help = {
    name: 'weather',
    description: 'Ennyien élnek.',
    usage: 'weather [hely] '
  };