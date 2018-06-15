exports.run = (client, message, args) => {
    message.channel.startTyping()
    const Discord = require(`discord.js`);
    const List = message.guild.emojis.map(e => e.toString()).join(" ");
    let humans = message.guild.members.filter(m => !m.user.bot).size;
    let member = message.mentions.members.first();
    let bots = message.guild.members.filter(m => m.user.bot).size;
    const List1 = message.guild.roles.map(e1 => e1.toString()).join(" ");
    let serverRegion = {
      'amsterdam' : ':flag_nl: Amsterdã',
      'brazil'    : ':flag_br: Brasil',
      'eu-central': ':flag_eu: Europa Central',
      'eu-west'   : ':flag_eu: Europa Ocidental',
      'frankfurt' : ':flag_de: Frankfurt',
      'hongkong'  : ':flag_hk: Hong Kong',
      'japan'     : ':flag_ja: Japão',
      'london'    : ':flag_gb: Londres',
      'russia'    : ':flag_ru: Russia',
      'singapore' : ':flag_sg: Singapura',
      'sydney'    : ':flag_au: Sydney',
      'us-central': ':flag_us: EUA Central',
      'us-east'   : ':flag_us: EUA Oriental',
      'us-west'   : ':flag_us: EUA Ocidental',
      'us-south'  : ':flag_us: EUA Sul',
  }[message.channel.guild.region];
  var moment = require('moment/moment');
  moment.locale('pt-BR'); 
  const dentrar = message.guild.createdAt
  const dentrar2 = message.guild.joinedAt
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
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
              "name": `${serverRegion} | ${message.guild.name}`,
              "value": `**Criado em**: ${moment(dentrar).format('LL')}\n\n**ID**: ${message.guild.id} \n**Dono**: ${message.guild.owner.user.tag}\n\n**Usuários**: ${humans} \n**Robôs**: ${bots}\n\n**Cargos**: ${message.guild.roles.size}\n**Canais**: ${message.guild.channels.size - 1}\n**Emojis**: ${message.guild.emojis.size}\n\n**Entrou em**: ${moment(dentrar2).format('LL')}`,
              "inline": true
              
              
            }]

            }
            })
            message.channel.stopTyping()
        }
