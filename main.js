const {
  Client,
  Discord,
  Collection,
  Intents,
  Member,
  Guild,
  Interaction,
} = require("discord.js");
const { token } = require('./config.json')
const path = require("path");
const WOKCommands = require("wokcommands");
const { MessageEmbed } = require("discord.js");
const { hyperlink, hideLinkEmbed } = require("@discordjs/builders");
const puppeteer = require("puppeteer");
const bulkDelete = require('./commands/bulkdelete');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.on('ready', async (message) => {
   bulkDelete(client)
})
// client.commands = new Discord.Collection();
// client.events = new Discord.Collection();

// ['command_handler', 'event_handler'].forEach(handler => {
//   require(`./handlers/${handler}`)(client, Discord);
// })

let boterror = client.channels.fetch('898801470240071698');

const mongo = require('./mongo')

const connectToMongoDB = async () => {
  await mongo().then(mongoose => {
    try {
     console.log(`Connected to mongodb!`);
    } finally {
    //  mongoose.connection.close();
    }
  })
}
connectToMongoDB()
/*
 Importing Modules / token eeee
*/
let channel;
const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({
  host: "StareStares.aternos.me",
  username: "oneone",
});

const { mineflayer: mineflayerViewer } = require("prismarine-viewer");
const { join } = require("path");
const { time, timeStamp, error } = require("console");
const { url } = require("inspector");
// const { channel } = require("diagnostics_channel");
bot.once("spawn", () => {
  mineflayerViewer(bot, { port: 3001, firstPerson: false }); // port is the minecraft server port, if first person is false, you get a bird's-eye view
});

client.on('messageCreate', async (message) => {
  if (message.content == '!ping') {
  await message.reply('Pong!')
  }
})

bot.on('login', async () => {
  bot.chat('hah im the bot')
  console.log('Connected to server')
})

// client.on('messageCreate', async (message) => {
//   if (message.content.includes('!ban')){
//   const { member, mentions } = message;
  
//   const tag = `<@${member.id}>`;
//   if(!message.member.permissions.has("BAN_MEMBERS")) {
//     message.channel.send('kiddo your not a moderator to bans folks.' ) 
//     return; } 
//   if (
//     message.author.id == "787977601976631336" ||
//     "839838899432849428"
//   ) {
//     const target = mentions.users.first();
//     if (target) {
//       const targetMember = message.guild.members.cache.get(target.id);
//       targetMember.ban();
//       message.delete();
//       message.channel.send(`${target} has been Banned `);
//     } else {
//       message.channel.send(`${tag} Undifined Please Mention a Target`);
//     }
//   } else {
//     message.channel.send(
//       `${tag} You Lack Permission to Do the following action if its a mistake please contact a administrater.`
//     );
//   } return;
// }

// else if (message.content.includes('!kick')) {
//   const { member, mentions } = message;
  
 
//   if(!message.member.permissions.has("KICK_MEMBERS")) {
//     message.channel.send('kiddo your not a moderator to bans folks.') 
//     return; } 
//     const target = mentions.users.first();
//     if (target) {
//       const targetMember = message.guild.members.cache.get(target.id);
//       targetMember.kick();
//       message.delete();
//       message.channel.send(`${target} has been Kicked `);
//     } else {
//       message.channel.send(`${tag} Undifined Please Mention a Target`);
//     }
//   } else {
//     message.channel.send(
//       `${tag} You Lack Permission to Do the following action if its a mistake please contact a administrater.`
//     );
//   } return;
    
// });


// client.on('guildMemberAdd', async ( guildMember) => {
//   let welcomechannel = await client.channels.fetch('898801469808070730');
//   let member = client.users.cache.get(guildMember.id)
//   let rolewelcome = await guildMember.guild.roles.cache.find(
//     (role) => role.name === "Members"
//   );
//   guildMember.roles.add(rolewelcome);
//   // welcomechannel.send(`hey ${guildMember} Welcome to our server make sure to read <#898801469334110227> ;)`)
//   // member.send('your so cool fam :)') 
//   let welcomeembed = new MessageEmbed()
//   .setTitle('Hey!')
//   .setDescription('Saviour is a cracked Minecraft server, mainly focused on 1.8.9 pvp training.')
//   // .setAuthor('ske') becaue he asked a
//   .addFields(
//     {name : "📑・Rules", value : 'Make Sure to read our rules!'},
//     {name : "🎫・support", value : "If you ever need any support regarding our discord server , or minecraft server ask here!"},
//     {name : "🔔・announcements", value : "Read Latest Announcements on our server!"},

//   ) 
//   .setTimestamp()
//   .setFooter('Have Fun bud!')
//   .setImage('https://tenor.com/view/puppy-burrito-puppy-gif-14371859')
//   .setThumbnail('https://i.imgur.com/LO7DOCN.png')

//   welcomechannel.send({ embeds: [welcomeembed] })  
//   welcomechannel.send(`${guildMember}`)
//   //898801469279576137
//   if (error) {console.log(`${guildMember} Has their privacy settings off , welcome message failed`)} return;
// })


client.on('guildBanAdd', async (guildMember) => {
  let logchannel = await client.channels.fetch('898801470240071697')

})

bot.on('error', console.log)
bot.on('kick', console.log)
client.login(token)