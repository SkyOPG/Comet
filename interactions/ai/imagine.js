const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const prodia = require("prodia-ai");
const fs = require("fs");
const fuzzball = require('fuzzball');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('generates an image based off your imagination')
    .addStringOption(option => 
        option.setName('prompt')
        .setDescription('your imagination here')
        .setRequired(true))
    .addStringOption(option =>
        option.setName('model')
        .setDescription('the model to use')
        .setRequired(true)
        .addChoices(
            { name: 'Lyriel', value: 'lyriel_v15.safetensors [65d547c5]' },
            { name: 'AnyV3', value: 'anythingv3_0-pruned.ckpt [2700c435]' },
            { name: 'AnyV4.5', value: 'anything-v4.5-pruned.ckpt [65745d25]' },
        )),
    async execute(client, interaction){
    prodia.key("apikey here");

    const nsfwWords = fs.readFileSync('./interactions/ai/NSFW.txt', 'utf8').split('\n').map((word) => word.trim().toLowerCase());
    
    const prompt = interaction.options.getString('prompt');
    
    const promptWords = prompt.toLowerCase().split(' ');
    
    for (const word of promptWords) {
      if (nsfwWords.includes(word)) {
        await interaction.reply('You can not generate an image with this prompt, try another!');
        return;
      }
    
      const matches = fuzzball.extract(word, nsfwWords, { scorer: fuzzball.token_set_ratio, limit: 1 });
    
      if (matches.length > 0 && matches[0][1] >= 80) {
        interaction.reply(`"${word}" is similar to "${matches[0][0]}", which is an NSFW word. You can not generate an image with this prompt, try another!`);
        return;
      }
    }

    let job = await prodia.createJob({
        model: interaction.options.getString('model'),
        prompt: prompt,
        negative_prompt: "none",
        seed: -1,
        steps: 100,
        cfg_scale: 7,
    });
    
    await interaction.reply(`generating... prompt:**${prompt}**`)

    while (job.status !== "succeeded" && job.status !== "failed") {
        await new Promise((resolve) => setTimeout(resolve, 250));

        job = await prodia.getJob(job.job);
    }

    if (job.status !== "succeeded") {
        await interaction.followUp("generation failed!");
    }

    await interaction.followUp({content:"Generation completed!", embeds: [
        new EmbedBuilder()
        .setTitle(prompt)
        .setImage(job.imageUrl)
    ]})
}
}