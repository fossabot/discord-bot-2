exports.run = (client, msg) => {
    msg.channel.send(`:game_die: **${msg.author.username}**, A számod **${Math.floor(Math.random() * 6) + 1}**!`);
}



exports.help = {
  name: 'roll',
  description: 'Dobókocka',
  usage: 'roll'
};
