const { SlashCommandBuilder } = require('discord.js');
const QuickChart = require('quickchart-js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('members')
		.setDescription('Get the server member count')
		.setDMPermission(false),

	async execute(interaction) {
		await interaction.deferReply();

            try {
                await interaction.guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
                    const onlineMembers = fetchedMembers.filter(member => member.presence?.status === 'online').size;
                    const idleMembers = fetchedMembers.filter(member => member.presence?.status === 'idle').size;
                    const dndMembers = fetchedMembers.filter(member => member.presence?.status === 'dnd').size;
                    const offlineMembers = fetchedMembers.filter(member => !member.user?.bot && member.presence?.status != 'offline').size;

                    const chart = new QuickChart();
                    chart.setConfig({
                        type: 'polarArea',
                        data: {
                            datasets: [
                                {
                                    data: [interaction.guild.memberCount, onlineMembers, idleMembers, dndMembers, offlineMembers],
                                    backgroundColor: ['#5865F2', '#57F287', '#FEE75C', '#ED4245', '#404040'], // convent the hex color to rgba to make it transparent
                                    borderColor: ['#5865F2', '#57F287', '#FEE75C', '#ED4245', '#404040'], // you can change the color according to the color you want
                                    borderWidth: [1, 1, 1, 1, 1],
                                    label: 'Server Member Stats',
                                },
                            ],
                            labels: [`Member: ${interaction.guild.memberCount}`, `Online: ${onlineMembers}`, `Idle: ${idleMembers}`, `DND: ${dndMembers}`, `Offline: ${offlineMembers}`],
                        },
                        options: {
                            responsive: true,
                            title: {
                                display: true,
                                position: 'top',
                                text: interaction.guild.name,
                                fontSize: 16,
                                padding: 20,
                            },
                            legend: {
                                display: true,
                                position: 'left',
                                align: 'center',
                                fullWidth: true,
                                reverse: false,
                                labels: {
                                    fontSize: 10,
                                    fontStyle: 'bold',
                                }
                            },
                            layout: {
                                padding: {
                                    top: 0,
                                    left: 50,
                                    bottom: 20,
                                    right: 20
                                },
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            },
                            scale: {
                                ticks: {
                                    display: true,
                                    fontSize: 8,
                                    fontFamily: 'sans-serif',
                                    fontColor: '#000000',
                                    fontStyle: 'normal',
                                    padding: 0,
                                },
                            },
                            plugins: {
                                datalabels: {
                                    align: 'end',
                                    anchor: 'end',
                                    font: {
                                        size: 10,
                                        weight: 'bold',
                                    },
                                    formatter: (value, ctx) => {
                                        if (value > 10) {
                                            return ctx.chart.data.labels[ctx.dataIndex];
                                        }
                                        return null;
                                    },
                                },
                            },
                        },
                    }).setBackgroundColor('transparent')

                    chart.toFile('chart.png');

                    interaction.editReply({ files: [{ attachment: String.raw`chart.png`, name: 'member-count.png' }] });
                });
            } catch (err) {
                console.error(err);
            }
	}
	
}