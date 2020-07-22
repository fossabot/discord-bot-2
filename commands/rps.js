let rps = ["Kő", "Papír", "Olló"];
function random() { return rps[ Math.floor(Math.random() * rps.length)] }
exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Válassz, Kő/Papír/Olló.");
    if (choice !== "kő" && choice !== "papír" && choice !== "olló") return msg.reply(choice + '  nem Olló, Nem Kő de nem is Papír');
    msg.reply(random());
}


exports.help = {
  name: 'rps',
  description: 'Kő papír olló.',
  usage: 'rps'
};
