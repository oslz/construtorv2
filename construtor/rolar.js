exports.run = async (client, message, args, level) => {

    let replies = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:"];
  
    let result = Math.floor((Math.random() * replies.length));

    message.channel.send({
        "embed": {
                "title":  ` `,
                "color": 3553598,
                "timestamp": new Date(),
                "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                },
            "image": {
                "url": ""
            },
        "fields": [
            {
              "name": `:game_die: Jogatina `,
              "value": `**Número**: ${replies[result]}`,
              "inline": true
              
              
            }]
    
            }
            })
            message.channel.stopTyping()
        
    }
