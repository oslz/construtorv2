exports.run = (client, message, args) => {
    message.channel.startTyping()
let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
message.channel.stopTyping()
message.channel.send({
    "embed": {
        "title": ` `,
        "description": `👑 Avatar: ${user.username}`,
        "url": "",
        "color": 3553598,  
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
        },
        "image": {
            "url": user.displayAvatarURL
        },
    }
})
}