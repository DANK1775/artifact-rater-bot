const { createWorker } = require('tesseract.js')

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
    catch(error){
        console.log(`archivo extractTxt ha ocurrido un error ${error}`)
    }
}

module.exports ={
    extractTxt
}