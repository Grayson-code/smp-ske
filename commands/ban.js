module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    if (message.content.includes("!ban")) {
      const { member, mentions } = message;

      const tag = `<@${member.id}>`;
      if (!message.member.permissions.has("BAN_MEMBERS")) {
        message.channel.send("kiddo your not a moderator to bans folks.");
        return;
      }
      if (message) {
        const target = mentions.users.first();
        if (target) {
          const targetMember = message.guild.members.cache.get(target.id);
          targetMember.ban();
          message.delete();
          message.channel.send(`${target} has been Banned `);
        } else {
          message.channel.send(`${tag} Undifined Please Mention a Target`);
        }
      } else {
        message.channel.send(
          `${tag} You Lack Permission to Do the following action if its a mistake please contact a administrater.`
        );
      }
      return;
    }
  });
};
