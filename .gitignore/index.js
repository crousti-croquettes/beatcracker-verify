const discord = require ('discord.js');

var client = new discord.Client();

const token = "NTUxMjIxNjc0MzU2Mzc1NTUy.D1uZgQ.G2JTiNvFjwz-l5KTw0YrOGDkhtU";

client.on ("ready",() => {

console.log("ready!");

client.user.setActivity("created by sneaky");

});

const fs = require("fs");

client.msgs = require("./msgs.json")

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
    message.channel.send ("confirmation envoyée !");

}

});

client.login (token);
