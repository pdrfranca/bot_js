const Discord = require('discord.js');
client = new Discord.Client();

const TOKEN = '...';

const prefixo = '/';

const servidores = {
  'server': {
    connection: null,
    dispatcher: null
  }
}

client.on('ready', () => {
  console.log(`Estou online! Estou conectado como ${client.user.tag}`);
});

client.on("message", async (msg) => {

// filtro

  if (!msg.guild) return;

  if (!msg.content.startsWith(prefixo)) return;
  
  if (!msg.member.voice.channel) {
    msg.channel.send('Você não está em um canal de voz');
    return;
  }

// comandos

  if (msg.content === prefixo + 'join') {
      servidores.server.connection = await msg.member.voice.channel.join();
  }
  

  if (msg.content === prefixo + 'houseofmemories') {
      servidores.server.connection.play('./music/hom.mp3');
  }

});

client.login(TOKEN);