import { event, Events } from '../utils/index.js';
import schema from '../utils/Schemas/files.js';

export default event(Events.InteractionCreate, async ({ log }, interaction) => {
    if(interaction.isModalSubmit()){
        const code = interaction.fields.getTextInputValue('code');
			const file = interaction.fields.getTextInputValue('file');
			const data = await schema.model.findOne({ Filename: file, Owner: interaction.user.id })
			if(data){
				await schema.model.findOneAndUpdate({ Filename: file }, {
					FileData: {
						Code: code
					}
				}, {}, async (err, doc, res) => {
					if(err) console.error(err);
					await interaction.reply({ content: "Saved!" });
				});
			} else {
				
			await interaction.reply({ content: "error", ephemeral: true })
			}
    }
})