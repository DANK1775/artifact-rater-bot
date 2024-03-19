const { EmbedBuilder } = require('discord.js')
const { randomIcon } = require('../functions/randomIcon')

const notFoundStats = () => {
     return new EmbedBuilder()
    .setTitle("**Error stats not found**")
    .setDescription("**No se indetifico ninguna stat**\n\n* **Debes proporcionar lo siguiente:** \n * El idioma del juego debe estar en español \n * Presenta las stats en la vista de info de artefacto no de mejora \n * Imagen clara de las stats")
    .setThumbnail(randomIcon())
    .setColor("#ff0000")
    .setTimestamp();
}

module.exports = {
    notFoundStats
}
