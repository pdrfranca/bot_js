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

// comandos

  if (msg.content === prefixo + 'oi') {
      msg.channel.send('Olá ' + msg.author.username);
  }

});

client.login(TOKEN);