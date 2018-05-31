const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

let badWords = ["fucking", "slut", "thot", "bitch", "fricky", "cunt", "frack", "fuck", "nigger", "spic"];

client.on("ready", () => {
  console.log("I have logged on!");

  console.log(`${client.user.username} has logged in!`);
  client.user.setActivity(`;ticket [Problem]`, {type: "playing"});
  client.user.setStatus("online");

});



client.on("guildMemberAdd", function(member) {

  member.guild.channels.find("name", "member-log").send("\n :fox: " + member.toString() + ", welcome to the **Foxy Support Server!**\n ``Confused?!?? Well we got you there! Go to `` <#449994317323436042> `` to learn more about me!`` ");

  member.addRole(member.guild.roles.find("name", "Foxy User"));
});

client.on("guildMemberRemove", function(member) {

  member.guild.channels.find("name", "member-log").send("\n :fox: " + member.toString() + ", left (Join back Soon)");

});

client.on("message", message => {

  if(message.author.bot) return;

  let prefix = ";";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === "fox") {
    message.channel.send("ðŸ¦Š");
  }
  if(cmd === "apache") {
    message.channel.send("\`\`\`I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I'm fucking retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me \"Apache\" and respect my right to kill from above and kill needlessly. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.\`\`\`");
  }
  if(cmd === "EE") {
    message.channel.send("\`\`\`Through a long, terrible journey. You enter a cave, though the cave seemed fine at first. The deeper you went the darker. As the lights were dimming out you heard foot steps coming up behind you. You start to pick up the pase and you see light. You sprint torwards it to find that you are falling. You didn't realize there was a giant hole at the end. When you fall to the bottom you die and don't find the easter egg D:\`\`\`");
  }
  if(cmd === "asexual") {
    message.channel.send("The fuck! This guy put his gender a asexual. ( **looks up meaning** ) without sexual feelings or associations. The FUCK. There's male and female not fucking a million genders. - Elite_Huntsman")
  }

  for (var i = 0; i < badWords.length; i++) {
    if(message.content.includes(badWords[i].toUpperCase)) {
      message.delete();
      message.channel.send("No cursing on this server please and thankyou!");
    }
  }


    if(cmd === `${prefix}ticket`) {

        let guild = message.guild;
        let ticket = args.join(" ").slice(0);
      
        if(args < 1) {
          message.reply(", please put a problem!");
          return;
        }

        let tCreated = new Discord.RichEmbed()
        .setTitle("Ticket Created!")
        .setDescription("Ticket will be reviewed shortly!")
        .setColor("#009926")
        .setFooter("Requested by: " + message.author.username, message.author.displayAvatarURL);

        let tMessage = new Discord.RichEmbed()
        .setTitle(message.author.username + "'s Ticket")
        .addField("Problem", ticket)
        .addField("What to do?", "Please wait for a staff member to get back to you!")
        .setFooter("Requested by: " + message.author.username, message.author.displayAvatarURL);

        message.channel.send(tCreated);

        guild.createChannel('Ticket-' + (message.author.username), 'text')
          .then(channel => {
            channel.setParent('450727870726275073');
            channel.send(tMessage)
          });
      }

});

client.login(process.env.BOT_TOKEN);
