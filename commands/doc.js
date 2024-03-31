const { SlashCommandBuilder,ActionRowBuilder,StringSelectMenuBuilder } = require('discord.js')

const row = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Nenhuma linguagem selecionada")
    .addOptions(
        {
        label: "JavaScrip",
        description: "Leia essa porra",
        value:"javaccrip"
    },
    {
        label: "Python",
        description: "Leia essa porra",
        value:"python"
    },
    {
        label: "React",
        description: "Leia essa porra",
        value:"react"
    }
    )
)


module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription('Linguagem '),

    async execute(interaction) {
        await interaction.reply({content:"Selecaione alguma coisa abaixo:", components: [row]})
    }
}