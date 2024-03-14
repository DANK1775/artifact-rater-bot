const { EmbedBuilder } = require('discord.js')
const { randomIcon } = require('../functions/randomIcon')

const notFound = () => {
     return new EmbedBuilder()
    .setTitle("**Error image not found**")
    .setDescription("Debes proporcionar una imagen en el mismo mensaje que usas el comando\n\n**Ejemplo:**\n!rate")
    .setImage('https://i.ibb.co/kyCt9Yy/artefacto.webp')
    .setThumbnail(randomIcon())
    .setColor("#ff0000")
    .setTimestamp();
}

module.exports = {
    notFound
}
