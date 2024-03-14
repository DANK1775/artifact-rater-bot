const { EmbedBuilder } = require('discord.js')
const { randomIcon } = require('../functions/randomIcon')
const { linea } = require('../functions/linea')
let rates = 0
let suma = 0
let msg = ''
async function rateEmbed(statsobj, message) {
    const nPropiedades = Object.keys(statsobj).length
    const embed = new EmbedBuilder()
    .setAuthor({
        name: `${message.author.globalName}`,
        iconURL: `${message.author.avatarURL()}`,
      })
      .setTitle("**Stats obtenidos**")
      .setThumbnail(randomIcon())
      .setTimestamp();

    for (const key in statsobj) {
        rates = parseFloat(statsobj[key].porcentaje.replace('%', ''))
        suma += rates
        msg += 
        `**${key}: ${'`'+statsobj[key].incremnetos + '`'}**\n` 
        embed.addFields(
          {
            name: `**${key.toString().toUpperCase()}: ${statsobj[key].porcentaje}**`,
            value: linea(statsobj[key].porcentaje),
            inline: false
          }
        );
    }
    const generalRate = (suma / nPropiedades).toFixed(1)
    
    embed.setDescription(`<:upvote:1217953062686298243> **TIMES TO STAT UP/ ROLLS:**\n${msg}\n[Click here to donate](https://www.paypal.com/donate/?hosted_button_id=C4CCDAFDW6EH2)\n\n**VALORACION GENERAL:** ${generalRate.toString() + '%'}\n${linea(generalRate)}\n\n  **SUB STATS:**`)
    if (generalRate <= 30) {
      embed.setColor("#ce2828");
    } else if (generalRate > 30 && generalRate <= 65) {
      embed.setColor("#c5d522");
    } else if (generalRate > 65){
      embed.setColor("#21ae1f");
    }

    rates = 0;
    suma = 0;
    msg = '';

    return embed
}

module.exports ={
    rateEmbed
}
