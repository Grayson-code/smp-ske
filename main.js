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
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
/*
 Importing Modules / token eeee
*/
let channel;
const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({
  host: "ip",
  username: "TheGuardian",
});

const { mineflayer: mineflayerViewer } = require("prismarine-viewer");
const { join } = require("path");
const { time, timeStamp } = require("console");
const { url } = require("inspector");
// const { channel } = require("diagnostics_channel");
bot.once("spawn", () => {
  mineflayerViewer(bot, { port: 3001, firstPerson: false }); // port is the minecraft server port, if first person is false, you get a bird's-eye view
});

client.login(token)