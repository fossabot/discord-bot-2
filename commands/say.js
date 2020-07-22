exports.run = (client, message) => {
    let args = message.content.split(" ").slice(1);
    message.delete();
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send("LOL ne is próbáld...!");
    message.channel.send(args.join(" ")).cleanContent;
};


exports.help = {
    name: "say",
    description: "A bot kimondja amit akarsz.",
    usage: "say [üzenet]"
};
