const { SlashCommandBuilder,EmbedBuilder } = require('discord.js')



// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("DarkRed")
	.setTitle('Comando git')
    .setThumbnail('https://preview.redd.it/whats-your-favorite-robot-devil-moment-v0-f6wt9zgpw6xb1.jpg?auto=webp&s=0326a3bc6c11db5b585435c576ea344b71b9c55a')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'Alexander Pendragon', value: 'DEUS COMEDOR DE BUCETA',inline:true },
		{ name: 'SAM', value: 'A PIKA SUPREMA DA HUMANIDADE', inline: true },
		{ name: 'Tempus', value: 'ARROMBADOR DE CU INTERDIMENSIONAL FÃ NUMERO 1 DA HATSUNE MIKU ', inline: true },
	)
module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription('comando git'),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}