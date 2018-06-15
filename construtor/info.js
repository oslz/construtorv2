exports.run = (client, message, args) => {
    let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
	// Define the member of a guild.
    const member = message.guild.member(user);
    message.channel.startTyping()
    const Discord = require(`discord.js`);
  var moment = require('moment/moment');
  moment.locale('pt-BR'); 
  const dentrar = message.guild.createdAt
  const dentrar2 = message.guild.joinedAt
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let status = {
    'dnd' : 'Ocupado',
    'online': 'Online',
    'offline' : 'Invísivel',
    'idle' : 'Ausente'

}[user.presence.status];
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
              "name": `:flag_br: | ${user.tag}`,
              "value": `\n**Criado em**: ${moment(user.createdAt).format('LL')}\n**ID**: ${user.id}\n**Status**: ${status}\n**Atividade**: ${user.presence.game ? user.presence.game.name : 'Nenhuma'}\n\n**Entrou em**: ${moment(member.joinedAt).format('LL')}\n**Apelido**: ${member.nickname !== null ? `${member.nickname}` : `${user.username}`}\n**Cargos**: ${member.roles.size - 1}`,
              "inline": true
              
              
            }]

            }
            })
            message.channel.stopTyping()
        }
