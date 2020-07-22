const Discord = require('discord.js')
const settings = require('../settings.json');
const fs = require('fs');
const customisation = require('../customisation.json');
const osutils = require('os-utils');


exports.run = async (client, message) => {
  
  var milliseconds = parseInt((client.uptime % 1000) / 100),
  seconds = parseInt((client.uptime / 1000) % 60),
  minutes = parseInt((client.uptime / (1000 * 60)) % 60),
  hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
  days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);
  days = (days < 10) ? "0" + days : days;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  fs.readdir('./commands/', async (err, files) => {
    if (err) console.error(err);
    totcmds = files.length;
  
      let prefix = "/"
    
      osutils.cpuUsage(function(v) {
        const embed = new Discord.MessageEmbed()
        .setColor(0x7289DA)
        .setThumbnail(client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
        .setURL(client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
        .setTimestamp()
        
        .addField("Prefix", prefix, true)
        .addField("Parancsok száma", `${totcmds} commands`, true)
        .addField("Szerverek száma", `${client.guilds.cache.size}`, true)
        .addField("Csatornák száma", `${client.channels.cache.size}`, true)
        .addField("Felhasználók száma", `${client.users.cache.size}`, true)
        .addField("Fejlesztő", 'davidfegyver', true)


        .addField("Operációs rendszer", osutils.platform(),true)
        .addField("Proci magok", osutils.cpuCount() + " Mag",true)
        .addField("CPU Használat", `${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%`,true)
        .addField("Memória", osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
        .addField("RAM használat", (process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(2) + "MB/" + osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
        .addField("Ping", Math.round(client.ws.ping) + "ms", true)
        .addField("Futásidő", days + "nap " + hours + "óra " + minutes + "perc " + seconds + "." + milliseconds + "másodperc", true)
        .setFooter(customisation.footer);
        message.channel.send({embed});
      })
  })
}


exports.help = {
  name: 'stats',
  description: 'A bot adatai',
  usage: 'stats'
};