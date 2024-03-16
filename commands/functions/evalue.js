const { cases } = require('./cases')
let rateStats = {}
let i = 0
let stat = 0
function rate(valor, min, max) {
    return (((valor - min) / (max - min)) * 100).toFixed(1) + '%';
}

function statporcentual(key, stat, i, min, max) {
    rateStats[key] = {
        porcentaje: rate(stat, min, max),
        incremnetos: i,
        valor: stat.toFixed(1) + '%',
        nombre: key
    }
}

function statplano(key, stat, i, min, max) {
    rateStats[key] = {
        porcentaje: rate(stat, min, max),
        incremnetos: i,
        valor: stat,
        nombre: key
    }
}

function evalue(stats) {
    rateStats = {}
    for (const keyStat in stats) {
        stat = stats[keyStat]
        for (const keyCase in cases) {
            if (keyStat === keyCase) {
                i = 0
                if (typeof stats[keyStat] === 'string'  && stats[keyStat].includes('%')) {  // verifica si el valor es % o plano
                    stat = parseFloat(stat.slice(0, -1))
                    cases[keyCase].Porcentual.forEach(range => {
                        if (stat >= range.min && stat <= range.max) {
                            statporcentual(keyStat, stat, i, range.min, range.max)
                        }
                        i++
                    });
                } else {
                    stat = parseInt(stat)
                    cases[keyCase].Plano.forEach(range => {
                        if (stat >= range.min && stat <= range.max) {
                            statplano(keyStat, stat, i, range.min, range.max)
                        }
                        i++
                    })
                }
            }
        }
    }
    return rateStats
}
module.exports = {
    evalue
}