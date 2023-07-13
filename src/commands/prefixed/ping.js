const { EmbedBuilder } = require('discord.js')
module.exports = {
    category: 'info',
    data: {
        name: "ping",
        aliases: []
    },
    execute(client, message, args){
        message.reply({ embeds: [new EmbedBuilder()
            .setTitle('Ping')
            .setDescription(`\`\`\`${client.ws.ping}ms\`\`\``)
            .setColor('Blue')
    ]
    })
    }
}
