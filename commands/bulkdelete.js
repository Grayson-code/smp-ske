

module.exports = (client) => {
    client.on('messageCreate', async (message, args) => {
        if (message.author.id == client.id) return;
        if (message.content.includes('!delete')) {
        let { channel } = message
        let split = message.content.trim().split(" ");
        let amount = split[1]
        if (!amount) return message.reply('Provide Number of messages to clear.');
        if (isNaN(amount)) return message.reply('Please Enter a "Number"');
        if (amount > 200) return message.reply('We dont wanna purge the whole channel. . . please enter a number less than 200');
        if (amount < 1) return message.reply('You must delete atleast 1 mesage or just manually delete them.');
     
         await channel.bulkDelete(amount);
         await channel.send(`Deleted ${amount} messages`);
        }
    })
}