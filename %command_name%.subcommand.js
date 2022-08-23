const { SlashCommandBuilder } = require('discord.js');

async function %command_name%Subcommand(interaction) {
    interaction.reply('%command_name% works!');
}

module.exports = %command_name%Subcommand;