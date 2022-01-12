const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**<a:sugeditidhw8hd72duheufduh3duhe:919238876608987188> پێویستە تۆ لە ڤۆیسەکە بیت **'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`https://discord.gg/EgxDhKxX دانرا تۆش ڕیکلامەکە بکە `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("926231094951575573").send(
`> <a:euebshbegs:915186870235824139> By: <@${message.author.id}> <:cycs4cuv7d6f7uf7d6f7guf6emoji_77:921024813622001685>
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Send Me Reklam | ریکلام بۆ من بنێرە`) 
});




client.login("OTMwNjE4MDkzOTg4OTA1MDAx.Yd4fow.jsBJ7wQyrjOWoXrFlAnO1C1osYY");// Token Dane 
