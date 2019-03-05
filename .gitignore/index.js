const Discord = require ('discord.js');

var client = new Discord.Client();

client.login(process.env.TOKEN)

client.on ("ready",() => {

console.log("ready!");

client.user.setActivity("created by sneaky");

});

client.on("guildMemberAdd", function(member)
{
  let memberRole = message.member.guild.roles.find(ch => ch.name === "Producteur ✔️");
    message.member.addRole(memberRole);  
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
    mention.sendMessage (mention + ' Vous avez été validé, vous êtes maintenant producteur confirmé.');
    message.channel.send ("Confirmation envoyée !");
    
    let memberRole = message.member.guild.roles.find(ch => ch.name === "Producteur ✔️");
    message.member.addRole(memberRole.id);

}

});
