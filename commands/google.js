const search = require('node-ddg').default;

const Discord = require('discord.js');;

exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send("Valamit meg kell adnod hogy keressek!");


    let string = ''

    search({ query: args.join("+"), maxResults: 3 })

      .then((results) => {

        for(let i = 0; i < 3; i++) {

      

          string = string + `\n**${results[i].title}** \n${results[i].body} \n${results[i].url}`

        }


      message.channel.send(string)

    })

    .catch((error) => { 

      message.channel.send("Hiba történt :/ \n" + error);

      return console.error('oops', error); 

    });    

    

}


;



exports.help = {

  name: 'google',

  description: 'Keres valamit.(DuckDuckGon)',

  usage: 'google <keresnivaló>'

};