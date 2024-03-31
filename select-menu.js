const {Client,Events,GatewayIntentBits, Collection} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()


client.on(Events.InteractionCreate,async interacation =>{
   
   
    if (!interacation.isChatInputCommand()) return
    const command = interacation.client.commands.get(interacation.commandName)
    if(!command){
        console.error("comando não encontrado")
        return
    }
    try{
        await command.execute(interacation)
    }catch(erro){
        console.error(erro)
        await interacation.reply("Houve um erro ao executar esse comando")
    }
})