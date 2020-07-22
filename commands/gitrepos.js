const Discord = require("discord.js");
const fetch = require("node-fetch");
exports.run = async(client, msg, args) => {
  
  let link = `https://api.github.com/users/${args[0]}/repos`;
  let body = await fetch(link);
  let json = await body.json();
  
  msg.channel.send(`Ennyit csinált Githubon ${args[0]}: ${json.length}`);



}
            
            
            
exports.help = {
  name: 'gitrepos',
  description: 'Github Repos.',
  usage: 'gitrepos [név]'
};
