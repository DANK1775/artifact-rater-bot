const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [3276799] });
const prefix = '!'
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', (ctx) => {
    client.user.setPresence({
        activities: [{
            name: 'Rating artifacts',
            type: 'WATCHING'
        }],
        status: 'online',
        afk: false
    })
    console.log(client.user.tag + 'ready')
});
client.on('messageCreate', async (message) => {
    try {
        if (message.author.bot) return; // ignorar si es bot
        if (!message.content.startsWith(prefix)) return; //ignorar si no empieza con el prefix
        const args = message.content.slice(prefix.length).trim().split(/ +/); // array del mennsaje sin prefix
        const command = args.shift().toLowerCase(); // comando usado
        const msg = message.content.replace(`!${command} `, '') // mensaje plano
        switch (command) {
            case 'rate':
                const comando = require('./commands/rate')
                comando.execute(message, null, msg)
                break;

            default:
                break;
        }

    } catch (error) {
        console.log(error)
    }
})

client.login('MTIwODU3NjExOTcwODU5MDA5MQ.GTDwvK.sISTEiSOX3autEn1ABrn6zPP4Bf4vWoZIs4cfQ')