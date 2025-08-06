// TODO: Run bot

const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../secret/config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    await sendMessageToChannel();
});

// Log in to Discord with your client's token
client.login(token);

// Sends login message to server
async function sendMessageToChannel() {
    const channelId = '1297271924216561789';
    const channel = await client.channels.fetch(channelId).catch(err => {
        console.error('Error fetching channel:', err);
    });

    if (channel) {
        await channel.send("I'm alive!").catch(err => {
            console.error('Error sending message:', err);
        });
    } else {
        console.error('Channel not found.');
    }
}
