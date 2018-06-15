const Client = require('fortnite');
// Create an instance of the client with your API Key
const fortnite = new Client('1b50a313-02af-435e-9918-014810f683dd');
 const Discord = require(`discord.js`)
// Get the stats of an Xbox player by the name of Number1Swifty
exports.run = (client, message, args, tools) => {
    let platform;
    let username;

    if (!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send('**Escolha a plataforma: `!fortnite [ pc | xbl | psn ] <nickname>`**');
    if (!args[1]) return message.channel.send('**Qual seu username na EPICGAMES: `!fortnite [ pc | xbl | psn ] <nickname>`**');

    platform = args.shift();
    username = args.join(' ');
    let data = fortnite.user(username, platform).then(data => {
        
        let stats = data.stats;
        let lifetime = stats.lifetime;
        console.log(lifetime)
        
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%']; 
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];


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
                  "name": `:crown: Fortnite Status :crown:`,
                  "value": `**Usuário**: ${data.username}\n**Modo**: Dupla \n\n**Jogou**: ${mplayed}\n**Ganhou**: ${wins} (${winper}%)\n**Matou**: ${kills} (${kd}%)`,
                  "inline": true
                  
                  
                }]
        
                }
                })
    })

}