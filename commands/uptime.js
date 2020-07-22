const Discord = require('discord.js');
exports.run = (client, message) => {
    var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        message.channel.send(":chart_with_upwards_trend: Már** " + hours + " **órája, **" + minutes + "** perce és **" + seconds + "." + milliseconds + "** másodperce!");
}

exports.help = {
  name: 'uptime',
  description: 'Megmutatja mennyi ideje van fent a bot.',
  usage: 'uptime'
};
