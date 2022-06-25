const Discord = require('discord.js');

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]});

const prefix = '+';
//const channel = await client.channels.fetch(933426571732213800);


client.once('ready', () =>{
    console.log("bot is online");
    console.log(client.channels);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // if(command ==='ping'){
    //     channel.send('pong!');
    // }
    // else if (command === 'ttv'){
    //     channel.send("https://www.twitch.tv/clusternite");
    // }
});


client.login('OTkwMjQ5MjA2NjgzOTU5Mzc2.GEfv8L.AkPGqwi9CRTDWYZii8O13RzRlpIr--SJs_OHQk'); //has to be last line