const {Client, Intents, Message, MessageEmbed,Permissions } = require('discord.js');
const config = require('./config.json')

const client = new Client({ 
    intents: 
    [
        Intents.FLAGS.GUILDS
    ]
});

client.on('ready', async () =>{
    var guilds = [];
    await client.guilds.cache.forEach(async (guild) =>{
        var ownerFound = guilds.findIndex(o => o.owner === guild.ownerId)
        if(ownerFound!=-1){
            guilds[ownerFound].guilds.push(guild.id);
        }else{
            guilds.push({
                owner:guild.ownerId,
                guilds:[
                    guild.id
                ]
            });
        }
    });
    console.log(guilds);
    process.exit(0);
})

client.login(config.token)