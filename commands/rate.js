const { extractTxt } = require('./functions/extract-text')
const { regex } = require('./functions/regex')
const { evalue } = require('./functions/evalue')

module.exports = {
    name: "rate",
    description: "evalua los stats de artefactos de una",
    async execute(message, args, msg) {
        try {
            if (message.attachments.size > 0) {
                const statsObject = regex(await extractTxt(message))
                if (Object.keys(statsObject).length > 0) {
                    const {rateEmbed} = require('./embeds/rateembed')
                    const finalStats = await rateEmbed(evalue(statsObject),message)
                    await message.reply({ embeds: [finalStats] });
                } else { // no se reconocierion stats en la imagen
                    const { notFoundStats } = require('./embeds/noStats')
                    await message.reply({ embeds: [notFoundStats()] });
                }
            } else { // si no sube una imagen
                const { notFound } = require('./embeds/notfound')
                await message.reply({ embeds: [notFound()] });
            }
        } catch (error) {
            console.log(error)
        }
    }
}