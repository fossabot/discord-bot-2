var asciiFaces = require("cool-ascii-faces");

function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.run = (client, message) => {
  var faces = asciiFaces.faces[random(asciiFaces.faces.length)];
  message.channel.send(faces);
};

exports.help = {
  name: 'ascii',
  description: 'Menő ASCII Arcok.',
  usage: 'ascii'
};
