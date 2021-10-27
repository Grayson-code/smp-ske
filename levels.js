const mongo = require('./mongo');

module.exports = (client) => {
    client.on('messageCreate', message => {
        const { member , guild } = message;
    })
}

const addXP = async  (guildId, clientId, xdToAdd ) => {
    await mongo().then(async mongoose => {
        try {

        } finally {
            mongoose.connection.close()
        }
    })
}