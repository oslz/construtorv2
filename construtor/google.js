var google = require("google")


exports.run = (client, message, args) => {
    message.channel.startTyping()
        let argsJunto = message.content.split(" ").slice(1).join(' ')
    if(argsJunto.length < 1) {
        message.channel.send('Use: `!google <argumentos de pesquisa>`')
    } else {
        var mensagem = message.content


    google(mensagem.slice(mensagem.length - argsJunto.length - 1), function(err, res){
        var i = 0

         
        const Discord = require('discord.js');
                const embed = new Discord.RichEmbed()
               .setTitle(':mag_right: Resultado(s) para: ' + mensagem.slice(mensagem.length - argsJunto.length - 1))
               .setDescription(`[${res.links[i].title}](${res.links[i].href})\n**${res.links[i].href !== null ? res.links[i].href : 'Nenhum resultado encontrado'}**`)
               .setColor(3553598)
              message.channel.send(embed)
              message.channel.stopTyping()
})
    }
}
    
    