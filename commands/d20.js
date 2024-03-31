const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dados")
        .setDescription('Vai da 20 vezes'),

    async execute(interaction) {
        await interaction.reply({content:`Voce deu ${random} vezes`})
        
    }
}

var random = Math.random() * 20