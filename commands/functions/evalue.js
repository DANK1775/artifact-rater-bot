const { cases } = require('./cases')
let rateStats = {}
let i = 0

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
        valor:  stat,
        nombre: key
    }
}


function evalue(stats) {
    rateStats = {}
    for (const key in stats) {
        i = 0
        let stat = stats[key]
        stats[key] = stats[key].toString()

        switch (key) {
            case 'atq':
                if (stats[key].includes('%')) {  // si es atq %
                    stat = parseFloat(stat.slice(0, -1))

                    cases.atqPorcentual.forEach(item => {
                        if (stat >= item.min && stat <= item.max) {
                            statporcentual(key, stat, i, item.min, item.max)
                        }
                        i++
                    });
                } else { // si es atq plano
                    stat = parseInt(stat)
                    cases.atqPlano.forEach(item => {
                        if (stat >= item.min && stat <= item.max) {
                            statplano(key, stat, i, item.min, item.max)
                        }
                        i++
                    });
                }
                break;
            case 'vida':
                if (stats[key].includes('%')) {
                    stat = parseFloat(stat.slice(0, -1))
                    cases.hpPorcentual.forEach(item => {
                        if (stat >= item.min && stat <= item.max) {
                            statporcentual(key, stat, i, item.min, item.max)
                        }
                        i++
                    });
                } else {
                    stat = parseInt(stat)
                    cases.hpPlano.forEach(item => {
                        if (stat >= item.min && stat <= item.max) {
                            statplano(key, stat, i, item.min, item.max)
                        }
                        i++
                    });
                }

                break;
            case 'def':
                if (stats[key].includes('%')) {
                    stat = parseFloat(stat.slice(0, -1))
                    cases.defPorcentual.forEach(item => {
                        if (stat >= item.min && stat <= item.max) {
                            statporcentual(key, stat, i, item.min, item.max)
                        }
                        i++
                    });
                } else {
                    stat = parseInt(stat)
                    cases.defPlano.forEach(item => {
                        if (stat >= item.min && stat <= item.max) {
                            statplano(key, stat, i, item.min, item.max)
                        }
                        i++
                    });
                }

                break;
            case 'maestría elemental':
                stat = parseInt(stat)
                cases.em.forEach(item => {
                    if (stat >= item.min && stat <= item.max) {
                        statplano(key, stat, i, item.min, item.max)
                    }
                    i++
                });
                break;
            case 'daño crit':
                stat = parseFloat(stat.slice(0, -1))
                cases.cDmg.forEach(item => {
                    if (stat >= item.min && stat <= item.max) {
                        statporcentual(key, stat, i, item.min, item.max)
                    }
                    i++
                });
                break;
            case 'prob. crit':
                stat = parseFloat(stat.slice(0, -1))
                cases.cRate.forEach(item => {
                    if (stat >= item.min && stat <= item.max) {
                        statporcentual(key, stat, i, item.min, item.max)
                    }
                    i++
                });
                break;
            case 'recarga de energía':
                stat = parseFloat(stat.slice(0, -1))
                cases.recarga.forEach(item => {
                    if (stat >= item.min && stat <= item.max) {
                        statporcentual(key, stat, i, item.min, item.max)
                    }
                    i++
                });
                break;
        }

    }
    return rateStats
}
module.exports = {
    evalue
}