const discord = require('discord.js');
const package = require('../package.json');

module.exports = props => {
    const embed = new discord.MessageEmbed(props);

    const footer = embed.footer || `- Quickcord v${package.version}`;

    embed.setFooter(footer);

    return embed;
}