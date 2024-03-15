const { EmbedBuilder } = require('discord.js')

const embedFatalError = new EmbedBuilder()
    .setTitle("**ERROR FAFAL**")
    .setDescription("**OCURRIO UN ERRORAL ANALIZAR LA IMAGEN**\n\n__Asegurese de:__")
    .addFields(
        {
            name: "Las stats se muestre en linea recta",
            value: "no pueden mostar el valor abajo del stat",
            inline: false
        },
        {
            name: "imagen clara",
            value: "el fondo debe ser de preferencia blanco\ny la iamgen de buena calidad",
            inline: false
        },
    )
    .setColor("#e01b24");

module.exports = {
    embedFatalError
}