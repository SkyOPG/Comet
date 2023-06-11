const { EmbedBuilder } = require('discord.js')
const os = require('os')
const PackageJSON = require('../../../../package.json')

module.exports = {
    category: 'misc',
    data: {
        name: 'stats',
        aliases: []
    },
    execute(client, message, args) {
        const users = ["bye#5538"]
        const devs = users.join(' | ')
        const discordJSVer = packageJSON.dependencies["discord.js"];
        const embed = new EmbedBuilder()
        .setTitle('Stats')
        .setDescription(`**BOT**\nName: **${client.user.username}**\nGuilds: **${client.guilds.cache.size}**\nUsers: **${client.users.cache.size}**\nUptime:**${Math.floor(client.uptime / 60000)}** minutes\n**Host**\nMemory left: **${(os.freemem() / 1024 / 1024)}**\nMemory Usage: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** MB\nCPU Name: **${os.cpus()[0].model}**\nCPU Speed: **${os.cpus()[0].speed}**MHz\nCPU Cores: **${os.cpus().length}**\nCPU Usage: **${(os.loadavg()[0] * 100).toFixed(2)}**%\n**Package Info**\nDiscord.js: **${DiscordJSVer}**\nArchiecture: **${os.arch()}**\n**Team**\n${devs}`)
        message.channel.send({ embeds: [embed] })
    }
}