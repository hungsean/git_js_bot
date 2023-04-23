import {SlashCommandBuilder} from 'discord.js';

export default {
    command : new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test command'),

    execute : async (interaction) => {
        await interaction.reply('Test command executed!');  
    }
}
