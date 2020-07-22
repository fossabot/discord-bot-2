const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const moment = require('moment');

client.log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();


fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
  client.log(`Összesen ${files.length} parancs betöltése.`);
  files.forEach(f => {
	  client.log(`Betöltve! ${f}`);
	  let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});


fs.readdir('./events/', (err, files) => {

  if (err) return console.error(err);

  client.log(`${files.length} esemény betöltése.`);

  files.forEach(f => {
    client.log(`Betöltve! ${f}`);
    let eventFunction = require(`./events/${f}`);
    let eventName = f.split('.')[0];
    client.on(eventName, (arg) => eventFunction.run(client, arg));
  });
});



client.login(settings.token);

