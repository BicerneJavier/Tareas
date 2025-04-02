const { Minima,Media,Maxima } = require("./Complejidad");
class Tarea {
  constructor(codigo, duracion,complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    return this.complejidad.calcularCosto(this);
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: ${this.getCosto()}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = [],complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad = complejidad
    }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    let costoSubtareas = this.tareas.reduce((total, tarea) => total + tarea.getCosto(), 0);
    let costoBase = this.complejidad.calcularCosto(this);
    let costoTotal = costoBase + costoSubtareas; 
    if (this.tareas.length > 3) {
      costoTotal *= 1.04; // Aplica 4% de overhead si tiene más de 3 subtareas directas
    }
    return Math.round(costoTotal);
  }
  
  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: ${this.getCosto()}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };
