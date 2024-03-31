
const {Client,Events,GatewayIntentBits, Collection} = require('discord.js');

//dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

//import dos comandos
const fs = require('node:fs')
const path = require('node:path')
const commandsPath = path.join(__dirname, "commands")
const commandFiles  = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles){
    const filePath = path.join(commandsPath,file)
    const command = require(filePath)
    if ('data' in command && 'execute' in command){
client.commands.set(command.data.name, command)
    } else {
        console.log(`Esse comando em ${filePath} esta com data ou execute ausente`)
    }
}


//Login Bot
client.once(Events.ClientReady, readyClient => {
    console.log(`Logado com sucesso - ${readyClient.user.tag}`);
});

client.login(TOKEN);

//Interaçoes
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
