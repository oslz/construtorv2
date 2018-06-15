exports.run = (client, message, args) => {
    message.channel.startTyping()
    client.generateInvite(['ADMINISTRATOR'])
    .then(link => {
      console.log(`Generated bot invite link: ${link}`);
const dentrar = client.joinedAt
var moment = require('moment/moment');
moment.locale('pt-BR'); 
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
          "name": `:flag_br: | Construtor`,
          "value": `**Entrei aqui em**: ${moment(dentrar).format('LL')}\n\n**ID**: ${message.guild.id} \n**Dono**: ${message.guild.owner.user.tag}`,
          "inline": true
          
          
        }]

        }
        })
        message.channel.stopTyping()
    
});
}