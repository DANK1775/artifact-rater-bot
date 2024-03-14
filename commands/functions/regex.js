function regex(texto) {
    // Estadísticas esperadas
    let estadisticasEsperadas = ["maestría elemental", "atq", "daño crit", "vida", "def", "recarga de energía", "prob. crit"];
    
    // Almacena los resultados en un objeto
    let stats = {};
    
    // Busca coincidencias específicas en el texto
    for (let i = 0; i < estadisticasEsperadas.length; i++) {
      let estadistica = estadisticasEsperadas[i];
      let regex = new RegExp(estadistica + "\\s*[+\\-—]*\\s*([0-9]+(?:\\.[0-9]+)?)%?", "i");
      let match = regex.exec(texto);
      
      if (match) {
        let valor = parseFloat(match[1]);
        // Añadir el símbolo "%" si la estadística tiene un porcentaje
        stats[estadistica] = match[0].includes('%') ? `${valor}%` : valor;
      }
    }
    
    return stats 
}

module.exports = {
    regex
}