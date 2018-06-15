exports.run = (client, message, args) => {
var MojangAPI = require('mojang-api');
var date = new Date();
date.setMonth(0); // 0 = January
var moment = require('moment/moment');
moment.locale('pt-BR'); 
let username = args.join(' ');
if(!username) return message.channel.send('Está faltando argumentos. `!mineinfo <username>`')
MojangAPI.uuidAt(username, date, function(err, res) {
    if (err)
    return message.delete();
        MojangAPI.nameHistory(res.id, function(err, res1) {
            if (err)
            return message.delete();
            else {
                if (res1.length == 1) {
                    message.channel.send({
                        "embed": {
                                "title":  ` `,
                                "color": 3553598,
                                "timestamp": new Date(),
                                "footer": {
                                    "icon_url": message.author.displayAvatarURL,
                                    "text": message.author.username
                                },
                                "thumbnail": {
                                    "url": `https://crafatar.com/avatars/${res.id}`
                                },
                            "image": {
                                "url": `https://crafatar.com/renders/body/${res.id}` 
                            },
                        "fields": [{
                              "name":`👑 Informações:`,
                              "value": `**Nickname**: ${username}\n**UUID**: ${res.id}\n\n**Skin download**: [Clique aqui](https://crafatar.com/skins/${res.id})`,
                              "inline": true
                              
                            }
                        ]
                    }
                
                    })
                            message.channel.stopTyping()
                
                } else {
                    var lastChange = res1[res1.length - 1];
                    var at = new Date(lastChange.changedToAt);
        message.channel.send({
            "embed": {
                    "title":  ` `,
                    "color": 3553598,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": message.author.displayAvatarURL,
                        "text": message.author.username
                    },
                    "thumbnail": {
                        "url": `https://crafatar.com/avatars/${res.id}`
                    },
                "image": {
                    "url": `https://crafatar.com/renders/body/${res.id}` 
                },
            "fields": [{
                  "name":`👑 Informações:`,
                  "value": `**Nickname**: ${username}\n**Última troca**: ${moment(at).format('LL')}\n**UUID**: ${res.id}\n\n**Skin download**: [Clique aqui](https://crafatar.com/skins/${res.id})`,
                  "inline": true
                  
                }
            ]
        }
    
        })
                message.channel.stopTyping()
    }
}
        })
    })
}
