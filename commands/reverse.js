exports.run = (client,message,args) => {
  message.delete();
  word = args.join(" ");
  var msg_string = word.split("");

  var reverse_string = "";
  var word;
  var split_word;
  for (var i = msg_string.length - 1; i >= 0; i -= 1) {

    reverse_string += msg_string[i];
  }
  message.channel.send(reverse_string);
}
  
exports.help = {
  name: 'reverse',
  description: 'Megfordítja a szavad.',
  usage: 'reverse [szó]'
};
  
