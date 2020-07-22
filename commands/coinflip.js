exports.run = async (bot, message) => {
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('Fej!');
    }
    else {
      message.channel.send('Írás!');
    }
},


exports.help = {
    name: 'coinflip',
    description: 'Pénzfeldobás',
    usage: 'coinflip'
  };
  