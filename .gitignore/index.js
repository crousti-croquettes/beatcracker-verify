const Discord = require ('discord.js');
const client = new Discord.Client();
const prefix = "b!";
client.login(process.env.TOKEN)

client.on ("ready",() => {

console.log("ready!");

client.user.setActivity("created by sneaky");

});

client.on("guildMemberAdd", member =>{
 
member.addRole("551128131046473739")
});



client.on ("message",(message) => {

    const msg = message.content.toLowerCase();
    if (message.author.bot) return;


if (msg.startsWith (prefix + "send")) {
 if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply("Tu n’as pas la permission, salfou va ! ")
    message.delete()

    const member = message.mentions.members.first()
    if(!member) return
    member.send(member + " Vous avez été validé, vous êtes maintenant producteur confirmé.");
    message.channel.send ("Confirmation envoyée !");
    member.addRole("551128131046473739")

}
});
