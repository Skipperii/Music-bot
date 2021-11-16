const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "localhost");

app.listen(app.get("port"), function() {
  console.log(
   "%s server listening at http://%s:%s",
    process.env.NODE_ENV,
   app.get("host"),
   app.get("port")
  );
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');


client.login(client.config.app.token);