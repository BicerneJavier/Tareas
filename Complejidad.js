class Minima {
  calcularCosto(tarea) {
    return tarea.duracion * 100;
  }
}

class Media {
  calcularCosto(tarea) {
    let costoBase = tarea.duracion * 100; 
    costoBase *= 1.05; // 5% extra para complejidad media
    return costoBase;
  }
}

class Maxima {
  calcularCosto(tarea) {
    let costoBase =0;
    if (tarea.duracion > 10) {
      costoBase += (tarea.duracion - 10) * 1000; // Costo extra por cada día que excede 10
    } else {
      costoBase = tarea.duracion * 100; // Base para todas las tareas
    }
    costoBase *= 1.07; // 7% extra para complejidad máxima
    return costoBase
  }
}
module.exports = { Minima,Media,Maxima };