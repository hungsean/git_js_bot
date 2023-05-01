import {SlashCommandBuilder} from 'discord.js';

export const command = new SlashCommandBuilder()
        .setName('test')
        .setDescription('Test command')

export const action = async(interaction) => {
    await interaction.reply('Test command executed!');  
    
}
