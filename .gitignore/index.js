const Discord = require ('discord.js');
const client = new Discord.Client();
const prefix = "b!";
client.login(process.env.TOKEN)

client.on ("ready",() => {

console.log("ready!");

client.user.setActivity("created by sneaky");

});

client.on("guildMemberAdd", member =>{
  const role =guild.roles.find(r => r.id==="552588744449065000")
member.addRole(role);
});



client.on ("message",(message) => {

    const msg = message.content.toLowerCase();
    if (message.author.bot) return;


if (msg.startsWith (prefix + "send")) {
    message.delete()

    const member = message.mentions.users.first()
    if(!member) return
    member.send(member + " Vous avez été validé, vous êtes maintenant producteur confirmé.");
    message.channel.send ("Confirmation envoyée !");
    const memberRole = message.guild.roles.find(r => r.id==="552588744449065000")
    message.member.addRole(memberRole.id);

}
});
