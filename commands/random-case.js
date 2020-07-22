var randomCase = require('random-case');
exports.run = (client, message, args) => {

  message.channel.send(randomCase(args.join(' ')));
};

exports.help = {
  name: 'randomcase',
  description: 'Néhány betűt NagyBetŰvÉ VálToZTat',
  usage: 'randomcase [Üzenet]'
};
