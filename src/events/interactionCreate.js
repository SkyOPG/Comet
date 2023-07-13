const { Events } = require('discord.js');
const colors = require('colors')

module.exports = {
	name: Events.InteractionCreate,
	async execute(client, interaction) {
		if (interaction.isChatInputCommand()){

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`.red);
			return;
		}	
		

		try{
			await command.execute(client, interaction);
		  } catch (error) {
			console.log(error);
  
			const channelID = '1129104086139154544';
			const channel = client.channels.cache.get(channelID);   
		  
  
			const embed = new EmbedBuilder()
			.setColor('#FF0000')
			.setTimestamp()
			.setFooter({ text: 'Error Reported At' })
			.setTitle('Command Execution Error')
			.setDescription('An error occurred while executing the command.')
			.addFields(
			  { name: '> •   Command', value: `\`\`\`${interaction.commandName}\`\`\`` },
			  { name: '> •   Triggered By', value: `\`\`\`${interaction.user.username}#${interaction.user.discriminator}\`\`\`` },
			  { name: '> •   Error Stack', value: `\`\`\`${error.stack}\`\`\`` },
			  { name: '> •   Error Message', value: `\`\`\`${error.message}\`\`\`` }
			);
		  
		  const yellowButton = new ButtonBuilder()
			.setCustomId('change_color_yellow')
			.setLabel('Mark As Pending')
			.setStyle('1');
		  
		  const greenButton = new ButtonBuilder()
			.setCustomId('change_color_green')
			.setLabel('Mark As Solved')
			.setStyle('3');
		  
		  const redButton = new ButtonBuilder()
			.setCustomId('change_color_red')
			.setLabel('Mark As Unsolved')
			.setStyle('4');
		  
		  const row = new ActionRowBuilder()
			.addComponents(yellowButton, greenButton, redButton);
		  
		  // Handle button interactions for the specific message
		  client.on('interactionCreate', async (interaction) => {
			try {
			  if (!interaction.isButton()) return;
			  if (interaction.message.id !== message.id) return; // Only handle button interactions for the specific message
		  
			  const { customId } = interaction;
		  
			  if (customId === 'change_color_yellow') {
				// Change the embed color to yellow
				embed.setColor('#FFFF00');
				await interaction.reply({
				  content: 'This error has been marked as pending.',
				  ephemeral: true,
				});
			  } else if (customId === 'change_color_green') {
				// Change the embed color to green
				embed.setColor('#00FF00');
				await interaction.reply({
				  content: 'This error has been marked as solved.',
				  ephemeral: true,
				});
			  } else if (customId === 'change_color_red') {
				// Change the embed color to red
				embed.setColor('#FF0000');
				await interaction.reply({
				  content: 'This error has been marked as unsolved.',
				  ephemeral: true,
				});
			  }
		  
			  // Update the existing message with the modified embed
			  await message.edit({ embeds: [embed], components: [row] });
		  
			  // Acknowledge the button click by deferring the interaction
			  await interaction.deferUpdate();
			} catch (error) {
			  console.log('Error in button interaction:', error);
			}
		  });
		  
		  // Send the initial embed with buttons
		  const message = await channel.send({ embeds: [embed], components: [row] });        
		  
		
		
  
		await interaction.reply({
		  content: 'There was an error while executing this command. I have sent your crash report to the support server. If this persists, please contact the developer by making a support request.',
		  ephemeral: true,
		});
	  }
	
	}
	if (interaction.isButton()) {
			const button = interaction.client.button.get(interaction.customId);

		if (!button) {
			console.error(`No command matching ${interaction.customId} was found.`.red);
			return;
		}

		try {
			await button.execute(client, interaction);
		} catch (error) {
			interaction.reply({ content: `there was an error running this button`, ephemeral: true })
			console.error(`Error executing ${interaction.customId}`.red);
			console.error(error)
		}			
		} else if (interaction.isStringSelectMenu()) {
			const select = interaction.client.select.get(interaction.customId);

		if (!select) {
			console.error(`No select menu matching ${interaction.customId} was found.`.red);
			return;
		}

		try {
			await select.execute(client, interaction);
		} catch (error) {
			interaction.reply({ content: `there was an error running this select menu`, ephemeral: true })
			console.error(`Error executing ${interaction.customId}`.red);
			console.error(error)
		}
		}
	}
}