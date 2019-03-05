const Discord = require ('discord.js');
const client = new Discord.Client();
const prefix = "b!";
client.login(process.env.TOKEN)

client.on ("ready",() => {

console.log("ready!");

client.user.setActivity("created by sneaky");

});

client.on("guildMemberAdd", member =>{
  let role =member.guild.roles.find(r => r.name= "Producteur ✔️");
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
    const memberRole = message.member.guild.roles.find("name", "Producteur ✔️");
    message.member.addRole(memberRole.id);

}
});
