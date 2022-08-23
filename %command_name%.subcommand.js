const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('%command_name%')
        .setDescription('%command_name% slash command')
        .setDMPermission(false),

    async execute(interaction) {
        interaction.reply({ content: "%command_name% works!", ephemeral: false });
    }
};