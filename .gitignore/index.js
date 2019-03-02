const Discord = require ('discord.js');

var client = new Discord.Client();

client.login(process.env.TOKEN)

client.on ("ready",() => {

console.log("ready!");

client.user.setActivity("created by sneaky");

});

const prefix = "b!";

client.on ("message",(message) => {

    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    mention = message.mentions.users.first();

if (msg.startsWith (prefix + "send")) {
    if (mention == null) { return; }
    message.delete();
    mentionMessage = message.content.slice (7);
    mention.sendMessage (mentionMessage);
    message.channel.send ("Confirmation envoyée !");

}

});
