const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'ODg0MjI5OTA3MzU2NDU0OTYy.YTVdRg._V0ovn1qB7RuXH3VuIFxVYqN4Pk';

client.on("ready", () => {
    console.log('Estou online');
});

client.on("message", (msg) => {
    if (msg.content === 'olá') {
        msg.reply('olá');
    }
    if (msg.content === 'bem vindo') {
        msg.channel.send('Olá ' +  msg.author.username);
    }
});

client.login(TOKEN);
