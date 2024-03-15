function regex(texto) {
  texto = texto.replace(/\n/g, '')
  texto = texto.replace(/\+ /g, '+')
  // texto = texto.replace(/\+ /g, '+').replace(/Energía\s*\n/g, 'energía '); // stat enegria suele hacer salto de linea
  // texto = texto.replace(/\+ /g, '+').replace(/Elemental\s*\n/g, 'elemental '); // stat maestria suele hacer salto de linea
    // Estadísticas esperadas
    let estadisticasEsperadas = ["maestría elemental", "atq", "daño crit", "vida", "def", "recarga de energía", "prob. crit"];
    
    // Almacena los resultados en un objeto
    let stats = {};

    // Busca coincidencias específicas en el texto
    for (let i = 0; i < estadisticasEsperadas.length; i++) {
        let estadistica = estadisticasEsperadas[i];
        let regex = new RegExp(estadistica + "\\s*\\+\\s*([0-9]+(?:\\.[0-9]+)?)%?", "im");
        let match = regex.exec(texto);

        if (match) {
            let valor = parseFloat(match[1]);
            console.log(valor)
            // Añadir el símbolo "%" si la estadística tiene un porcentaje
            stats[estadistica] = match[0].includes('%') ? `${valor}%` : valor;
        }
    }

    console.log(texto)
    
    return stats;
}

module.exports = {
    regex
}