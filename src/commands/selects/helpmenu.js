const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js')

/*

*/

module.exports = {
    data: {
        id: 'helpmenu'
    },
    async execute(client, interaction){ 
        let type;
        if(interaction.values[0] === 'help-fun'){
            type = 'fun';
        } else if(interaction.values[0] === 'help-info'){
            type = 'info';
        } else if(interaction.values[0] === 'help-mod'){
            type = 'mod';
        }else if(interaction.values[0] === 'help-ai'){
            type = 'ai'
        }else if(interaction.values[0] === 'help-other'){
            type = 'other'
        }else if(interaction.values[0] === 'help-music'){
            type = 'music'
        }else if(interaction.values[0] === 'help-misc'){
            type = 'misc'
        }else if(interaction.values[0] === 'help-lvl'){
            type = 'levelling'
        }else if(interaction.values[0] === 'help-economy'){
            type = 'economy'
        }

        let arr = []
        if(type === 'fun'){
            client.category.fun.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder().setTitle('Help').setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun')
            .setDefault(true),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        } else if(type === 'info'){
            client.category.info.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info')
            .setDefault(true),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        } else if(type === 'moderation'){
            client.category.moderation.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('moderation')
            .setDescription('mod commands')
            .setValue('help-mod')
            .setDefault(true),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(type === 'ai'){
            client.category.ai.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
            .setDefault(true)
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(type === 'economy'){
            client.category.economy.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy')
            .setDefault(true),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(type === 'levelling'){
            client.category.levelling.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl')
            .setDefault(true),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(type === 'misc'){
            client.category.miscanellous.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc')
            .setDefault(true),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(type === 'music'){
            client.category.music.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
            .setDefault(true)
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(type === 'none'){
            client.category.none.map((e) => {
                let a = e.data.name
               arr.push(a)
            })
        let arr2 = arr.join(', ')
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription(`\`${arr2}\``).setColor('#5865F2')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
            .setDefault(true)
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }
    }
    }
