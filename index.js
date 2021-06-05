const Discord = require('discord.js');
const client = new Discord.Client();
const token = "ODQ5MzQ3NDUwOTY2OTAwNzU3.YLZ2dA.5SeFaB4-XDxCy8MUcDWJEuX3TOw";
const PREFIX = '!';

client.login(token);

client.on('ready', () => {
    var testChannel = client.channels.cache.find(channel => channel.id === '831673581854785537');

    console.log("The bot is logged in.");

    setInterval(() => {
        testChannel.send("!embed");
    }, 7200000);
})

client.on('message', message=> {

    let args = message.content.slice(PREFIX.length).split(' ');

    switch(args[0]){
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('Hey Liebe Community: ')
            .addField('Ich streame jeden Tag auf Twitch', "ㅤ")
            .addField('Schaut gerne vorbei wenn ihr Lust und Laune habt :)', "ㅤ")
            .addField('Drei mal in der Woche habt ihr die Chance ein Gewinnspiel zu gewinnen', "ㅤ")
            .addField('Sei aktiv und vielleicht gewinnst du auch mal was ;)', "ㅤ")
            .addField('https://www.twitch.tv/roadkill__streaming', "ㅤ")
            .setThumbnail('https://cdn.mee6.xyz/guild-images/645411513582092310/2894e42cf2da0b0e8812a484a28de9c75b568c079d93de0300e5fb998602aa42.png')
            .setImage('https://cdn.mee6.xyz/guild-images/645411513582092310/2894e42cf2da0b0e8812a484a28de9c75b568c079d93de0300e5fb998602aa42.png')
            .setColor(0x0E3C82)
            message.channel.send(embed);
            break;
    }
})