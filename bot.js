const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")
const settings = require("./settings.json")
const prefix = settings.prefix
bot.on('ready', async() => {
console.log("READY! " + bot.user.username)
bot.user.setPresence({ game: { name: settings.game, type: 0} });
bot.user.setStatus(settings.status)
});


bot.on('message', message => {
    let testing123 = message.guild.roles.find(r=> r.name === settings.modrole)
    if(!testing123) return;
    if(!message.member.roles.has(testing123.id)) return;
    if(message.author.bot) return;
    if(message.guild.id !== settings.serverID) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === `!r`) {
        if(message.channel.name !== settings.modchannel) return;
        message.delete()
        const what = args[0]
const what2 = args.slice(1).join(' ')
        const lol = message.guild.channels.find(r=> r.id === "468155158459580426")
        let lmao = message.channel.fetchMessages()
        fs.readdir('./cases/', function(err, items) {
            var itemz = items.length
        fs.readFile('./names/' + what + ".txt", 'utf8', function(err, data2) {
            fs.readFile('./casename/' + what + ".txt", 'utf8', function(err, data3) {
                fs.readFile('./color/' + what + ".txt", 'utf8', function(err, data4) {
       const fuck = new Discord.RichEmbed()
       .setDescription("Case " + what +  " | " + data3)
       .addField("User", data2)
       .setColor(data4)
       .addField("Moderator", message.author.username + "#" + message.author.discriminator)
       .addField("Reason", what2)
        lmao.then(r=> {
fs.readFile('./cases/' + what + ".txt", 'utf8', function(err, data) {
r.find(r=> r.id === data).edit(fuck)
});
        });
    });
});
});
        });
    }
    if(command === `${prefix}kick`) {
        const who = message.mentions.users.first()
        if(!who) return message.channel.send("Mention someone to kick")
        message.guild.member(who).kick()
          fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    if(!lol) return;
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Kick")
    .addField("User", who.username + "#" + who.discriminator)
    .addField("Moderator", message.author.username + "#" + message.author.discriminator)
    .setColor("#FFFF00")
    .addField("Reason", "`moderator, please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", who.username + "#" + who.discriminator + "(" + who + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Kick", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#FFFF00", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });
    }
    if(command === `${prefix}ban`) {
        const who = message.mentions.users.first()
        if(!who) return message.channel.send("Mention someone to ban")
        message.guild.member(who).ban()
    }
    if(command === `${prefix}mute`) {
        const who = message.mentions.users.first()
        if(!who) return message.channel.send("Mention someone to mute")
        let mutedrole = message.guild.roles.find(r=> r.name === "Muted")
        if(!mutedrole) return message.channel.send("Role 'Muted' not found")
        message.guild.member(who).addRole(mutedrole.id)
    }
    if(command === `${prefix}tempban`) {
        const who = message.mentions.users.first()
        if(!who) return message.channel.send("Mention someone to tempban")
        let mutedrole = message.guild.roles.find(r=> r.name === "TempBeaned")
        if(!mutedrole) return message.channel.send("Role 'TempBeaned' not found")
        message.guild.member(who).addRole(mutedrole.id)
    }

    if(command === `${prefix}tempunban`) {
        const who = message.mentions.users.first()
        if(!who) return message.channel.send("Mention someone to tempunban")
        let mutedrole = message.guild.roles.find(r=> r.name === "TempBeaned")
        if(!mutedrole) return message.channel.send("Role 'TempBeaned' not found")
        message.guild.member(who).removeRole(mutedrole.id)
    }
    if(command === `${prefix}unmute`) {
        const who = message.mentions.users.first()
        if(!who) return message.channel.send("Mention someone to unmute")
        let mutedrole = message.guild.roles.find(r=> r.name === "Muted")
        if(!mutedrole) return message.channel.send("Role 'Muted' not found")
        message.guild.member(who).removeRole(mutedrole.id)
    }
    if(command === `${prefix}help`) {
        message.channel.send("`" +`${prefix}kick, ${prefix}ban, ${prefix}mute, ${prefix}unmute, ${prefix}tempban, ${prefix}tempunban` + "`")
    }
});
bot.on('guildBanAdd', (guild, member) => {
    if(guild.id !== settings.serverID) return;
    fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    if(!lol) return;
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Ban")
    .addField("User", member.username + "#" + member.discriminator)
    .addField("Moderator", "???")
    .setColor("#FF0000")
    .addField("Reason", "`moderators please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", member.username + "#" + member.discriminator + "(" + member + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Ban", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#FF0000", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });
});
bot.on('guildBanRemove', (guild, member) => {
    if(guild.id !== settings.serverID) return;
    fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    if(!lol) return;
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Unban")
    .addField("User", member.username + "#" + member.discriminator)
    .addField("Moderator", "???")
    .setColor("#00FF00")
    .addField("Reason", "`moderators please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", member.username + "#" + member.discriminator + "(" + member + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Unban", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#00FF00", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });
});
bot.on('guildMemberUpdate', (oldMember, newMember) => {
    if(newMember.guild.id !== settings.serverID) return;
const role = newMember.guild.roles.find(r=> r.name === "Muted")
if(!role) return;
if(newMember.roles.has(role.id)) {
    if(!oldMember.roles.has(role.id)) {
    fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    if(!lol) return;
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Mute")
    .addField("User", newMember.user.username+ "#" + newMember.user.discriminator)
    .addField("Moderator", "???")
    .setColor("#FFFF00")
    .addField("Reason", "`moderators please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", newMember.user.username + "#" + newMember.user.discriminator + "(" + newMember + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Mute", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#FFFF00", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });
}
}
if(oldMember.roles.has(role.id) && !newMember.roles.has(role.id)) {
    fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Unmute")
    .addField("User", newMember.user.username+ "#" + newMember.user.discriminator)
    .addField("Moderator", "???")
    .setColor("#00FF00")
    .addField("Reason", "`moderators please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", newMember.user.username + "#" + newMember.user.discriminator + "(" + newMember + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Unmute", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#00FF00", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });

}

let role3 = newMember.guild.roles.find(r=> r.name === "TempBeaned")
if(!role3) return;
if(newMember.roles.has(role3.id)) {
    if(!oldMember.roles.has(role3.id)) {
    fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Temporary Ban")
    .addField("User", newMember.user.username+ "#" + newMember.user.discriminator)
    .addField("Moderator", "???")
    .setColor("#FF0000")
    .addField("Reason", "`moderators please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", newMember.user.username + "#" + newMember.user.discriminator + "(" + newMember + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Temporary Ban", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#FF0000", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });
}
}
if(!newMember.roles.has(role3.id)) {
    if(oldMember.roles.has(role3.id)) {
            fs.readdir("./cases/", function(err, items) {
        var itemrare = items.length + 1
    let lol = bot.channels.find(r=> r.name === settings.modchannel)
    const embed = new Discord.RichEmbed()
    .setDescription("Case " + itemrare +  " | Temporary Unban")
    .addField("User", newMember.user.username+ "#" + newMember.user.discriminator)
    .addField("Moderator", "???")
    .setColor("#00FF00")
    .addField("Reason", "`moderators please do !r " + itemrare + " <reason>`")
    bot.channels.get(lol.id).send(embed)
    .then(r=> {
        fs.readdir("./cases/", function(err, items) {
            fs.readdir("./names/", function(err, items2) {
                fs.readdir("./casename/", function(err, items22) {
                    fs.readdir("./color/", function(err, items33) {
                var items1 = items.length + 1
                var items3 = items2.length + 1
                var items4 = items22.length + 1
                var items5 = items33.length + 1
    fs.writeFile("./cases/" + items1 + ".txt", r.id, function(err) {
        fs.writeFile("./names/" + items3 + ".txt", newMember.user.username + "#" + newMember.user.discriminator + "(" + newMember + ")", function(err) {
            fs.writeFile("./casename/" + items4 + ".txt", "Temporary Unban", function(err) {
                fs.writeFile("./color/" + items4 + ".txt", "#00FF00", function(err) {
        });
    });
    });
    });
    });
});
});
        });
});
    });
    }
}
});
bot.login(settings.token)