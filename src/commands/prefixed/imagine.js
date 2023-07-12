const { EmbedBuilder } = require('discord.js')
const ProdiaAI = require("prodia-ai");
const fs = require("fs");
const fuzzball = require('fuzzball');
const { prodiac } = require('../../../config.json')

module.exports = {
    category: 'ai',
    data: {
        name: 'imagine',
        aliases: []
    },
    async execute(client, message, args) {
        const prodia = new ProdiaAI({
            key: prodiac
          })

        var model;

        if((args[0]==='Lyriel') && (args.length > 3)) {
            model = "lyriel_v15.safetensors [65d547c5]"
        } else if(args[0]==='AnyV4' && args.length > 3) {
            model = "anything-v4.5-pruned.ckpt [65745d25]"
        } else if(args[0]==='AnyV3' && args.length > 3) {
            model = "anythingv3_0-pruned.ckpt [2700c435]"
        } else {
            return message.channel.send( { embeds: [
                new EmbedBuilder()
                .setTitle('Error')
                .setDescription('Invalid usage')
            ] } )
        }
    const nsfwWords = fs.readFileSync(__dirname + '/../../others/NSFW.txt', 'utf8').split('\n').map((word) => word.trim().toLowerCase());
    console.log(nsfwWords)
    const filer = args.filter((e) => !e.includes("Lyriel"))
    console.log(filer)
    const prompt = filer.join(' ')
    console.log(prompt)
    
    const promptWords = prompt.toLowerCase().split(' ');
    
    for (const word of promptWords) {
      if (nsfwWords.includes(word)) {
        console.log(word)
        message.reply({content: 'You can not generate an image with this prompt, try another!', ephemeral: true});
        return;
      }
    
      const matches = fuzzball.extract(word, nsfwWords, { scorer: fuzzball.token_set_ratio, limit: 1 });
    
      if (matches.length > 0 && matches[0][1] >= 90) {
        interaction.reply(`"${word}" is 90% (or more) similar to an NSFW word. You can not generate an image with this prompt, try another!`);
        return;
      }
    }

    let job = await prodia.createJob({
        model: model,
        prompt: prompt,
        negative_prompt: "(ugly:1.3), (fused fingers), (too many fingers), (bad anatomy:1.5), (watermark:1.5), (words), letters, untracked eyes, asymmetric eyes, floating head, (logo:1.5), (bad hands:1.3), (mangled hands:1.2), (missing hands), (missing arms), backward hands, floating jewelry, unattached jewelry, floating head, doubled head, unattached head, doubled head, head in body, (misshapen body:1.1), (badly fitted headwear:1.2), floating arms, (too many arms:1.5), limbs fused with body, (facial blemish:1.5), badly fitted clothes, imperfect eyes, untracked eyes, crossed eyes, hair growing from clothes, partial faces, hair not attached to head",
        seed: -1,
        steps: 50,
        cfg_scale: 7,
    });
    
    const msg = await message.reply( { embeds: [
        new EmbedBuilder()
        .setTitle("Generating")
        .addFields({ name: "Model", value: `**${args[0]}**: \`${model}\``, inline: true },
                    { name: "Prompt", value: `\`${prompt}\``, inline: true },
                    { name: "Steps", value: `\`50\``, inline: true },
                    { name: "Seed", value: `\`-1\``, inline: true } )
        .setColor('Aqua')
    ] } )

    while (job.status !== "succeeded" && job.status !== "failed") {
        await new Promise((resolve) => setTimeout(resolve, 250));

        job = await prodia.getJob(job.job);
    }

    if (job.status !== "succeeded") {
        msg.edit({ embeds: [
            new EmbedBuilder()
            .setTitle("Generation failed")
            .addFields({ name: "Model", value: `**${args[0]}**: \`${model}\``, inline: true },
                    { name: "Prompt", value: `\`${prompt}\``, inline: true },
                    { name: "Steps", value: `\`50\``, inline: true },
                    { name: "Seed", value: `\`-1\``, inline: true } )
            .setColor('Red')
        ]});
    }

    msg.edit({ embeds: [
        new EmbedBuilder()
        .setTitle("Generation Complete!")
        .addFields({ name: "Model", value: `**${args[0]}**: \`${model}\``, inline: true },
                    { name: "Prompt", value: `\`${prompt}\``, inline: true },
                    { name: "Steps", value: `\`50\``, inline: true },
                    { name: "Seed", value: `\`-1\``, inline: true } )
        .setImage(job.imageUrl)
        .setColor("Green")
    ]})
    }
}