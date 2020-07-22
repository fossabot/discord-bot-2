const Discord = require("discord.js");
const superagent = require("superagent");



exports.run = async (client, msg, args) => {
  let text = args.join(" ");
  
  let link = `https://nekobot.xyz/api/imagegen?type=tweet&username=${msg.author.username}&text=${text}`;
  
  const { body } = await superagent
  .get(link);
  link = body.url;
  msg.channel.send({file: link});
  msg.delete();

}
            
            
exports.help = {
  name: 'tweet',
  description: 'Fake Tweet.',
  usage: 'tweet [név] [üzenet]'
};
