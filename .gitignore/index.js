const Discord = require ('discord.js');

var client = new Discord.Client();

function getAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == 'function';
    });
}
client.login(process.env.TOKEN)

client.on ("ready",() => {

console.log("ready!");
//console.log(client.member)
client.user.setActivity("created by sneaky");

});

client.on("guildMemberAdd", function(member)
{
  let memberRole = message.member.guild.roles.find("id", "552549087476711444");
//console.log(message.author); 
console.log("here");
   message.author.addRole(memberRole.name);  
});    

const prefix = "b!";

client.on ("message",(message) => {
    msg = message.content.toLowerCase();
    if (message.author.bot) return;

    mention = message.mentions.users.first();

if (msg.startsWith (prefix + "send")) {
    if (mention == null) { console.log(123); }
    message.delete();
    mentionMessage = message.content.slice (7);
    message.author.sendMessage (message.author.username + " Vous avez été validé, vous êtes maintenant producteur confirmé.");
    message.channel.send ("Confirmation envoyée !");
let memberRole = message.member.guild.roles.find("name", "Producteur ✔️");
console.dir(message.member);
  message.member.addRole(memberRole);    


}

});
