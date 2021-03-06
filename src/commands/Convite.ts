import type { Message, Client } from "discord.js";
import config from "../config";

const { prefix } = config;

class Convite {
    public create(message: Message, client: Client) {
        if(message.content === prefix + "convite") {
            message.delete();
            client.guilds.cache.forEach(guild => {
                guild.channels.cache.first().createInvite()
                .then(inv => {
                    message.channel.send(inv.url);
                })
                .catch(err => message.channel.send('Erro ao gerar o convite :('));
            });
        }
    }
}

export default Convite;