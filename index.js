const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const tokJson = require('./token.json');
const token = tokJson.token;

const conJson = require('./config.json');
const prefix = conJson.prefix;

counterNum = 0;

bot.on('ready', () => {
    console.log('Online.');

    bot.user.setActivity("Counter in #counting", { type: "STREAMING"});
});

bot.on('message', msg => {

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);

    if(msg.content.includes('ellie')) {
        if(!msg.content.includes('ellie is fat')){
            msg.channel.send('<@659330763740938250> is a fat whore');
        }
    }

    if(msg.content.includes('ellie is fat')) {
        msg.channel.send('fr');
    }

    if(msg.channel.id == '881274089459818506') {
        if (msg.member.id != '880892650063003708') {
            if(msg.content == counterNum + 1) {
                counterNum = counterNum + 1;
                msg.channel.send('**Current Number:** ' + counterNum);
            } else if(msg.content != counterNum + 1) {
                if(!isNaN(msg.content)) {
                    msg.channel.send('**Counter has been restarted, because of some retard named <@' + msg.member.id + '>**');
                    counterNum = 0;
                }
            }

            if(msg.content == prefix + 'currentnum') {
                msg.channel.send('**Current Number:** ' + counterNum);
            }
        }
    }

    if(msg.member.id == '448602378619584512') {
        if(msg.content.startsWith(prefix + 'del')) {
            delNum = args[1];
            msg.channel.bulkDelete(delNum);
        }
    }

})

bot.login(token);