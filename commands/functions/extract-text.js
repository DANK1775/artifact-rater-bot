const { createWorker } = require('tesseract.js')
const { ocrSpace } = require('ocr-space-api-wrapper');
async function extractTxt(message, args) {
    try {
        const worker = await createWorker('spa');
        await worker.setParameters({
            tessedit_char_whitelist: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZñÑ+.% íÍ',
        });
        const { data: { text } } = await worker.recognize(message.attachments.first().url);
        await worker.terminate();
        return text
    }
    catch (error) {
        console.log(`archivo extractTxt ha ocurrido un error ${error}`)
    }
}

async function extractTxt2(message) {
    try {
        // Using the OCR.space default free API key (max 10reqs in 10mins) + remote file
        const res1 = await ocrSpace(message.attachments.first().url);

        console.log(res1.ParsedResults[0].ParsedText)
        return res1.ParsedResults[0].ParsedText
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    extractTxt,
    extractTxt2
}