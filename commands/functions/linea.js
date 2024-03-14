let symbol = '▃▃'
let n = 0
function linea(cantidad) {
    if (isNaN(cantidad)) {
        n = parseFloat(cantidad.replace('%', ''))
    } else {
        n = cantidad
    }
    
    let redondear = Math.round(n)
    n = redondear >= 100? parseInt(redondear.toString()[0] + 0): parseInt(redondear.toString()[0])
    if (n === 0) {
    return '▃'
    } else {
        return lineaConSymbol = symbol.repeat(n)
    }
}

module.exports = {
    linea
}