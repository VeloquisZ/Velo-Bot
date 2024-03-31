const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription('Responde com pong'),

    async execute(interaction) {
        await interaction.reply("Pong!")
        await interaction.followUp({ content: 'Comi o cu de quem ta lendo', ephemeral: true});
        
    }
}
