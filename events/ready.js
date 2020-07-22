const activities_list = [
    "With nodeJS", 
    "Own bot",
    "With code", 
    "Developer: davidfegyver#8572",
    "/help"
];


exports.run = (client) => {

  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]); 
  }, 10000); 
  client.log(`A bot elindult, ${client.users.cache.size} felhasználóval, ${client.channels.cache.size} csatornán és ${client.guilds.cache.size} szerveren.`);
   

}
