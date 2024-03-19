const { emoji } = require('./emojis')

let emojiBar = ''
let emojiCount = 1
let n = 0

function nbar(n) {
    emojiCount = 1
    emojiBar = ''

    for (let i = 1; i < n; i++) {
        emojiBar += emoji.BL
        emojiCount++
    }

    for (let x = 0; x < (9 - emojiCount); x++) {
        emojiBar += emoji.BV
    }

    return emojiBar

}
function linea(cantidad) {
    n = 0
    if (isNaN(cantidad)) {
        n = parseFloat(cantidad.replace('%', ''))
    } else {
        n = cantidad
    }

    let redondear = Math.round(n)

    n = redondear >= 100 ? parseInt(redondear.toString()[0] + 0) : parseInt(redondear.toString()[0])
    if (n === 0) return `${emoji.BIV}${nbar(n)}${emoji.BDV}`

    if ((n > 1) && (n < 10)) return `${emoji.BIL}${nbar(n)}${emoji.BDV}`

    if (n === 10) return `${emoji.BIL}${nbar(n)}${emoji.BDL}`

}

module.exports = {
    linea
}