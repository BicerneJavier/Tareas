const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const { Minima, Media , Maxima } = require("./Complejidad")

const t1 = new Tarea("1", 3 , new Maxima());

const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, new Media()), 
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3, new Minima()),
    new Tarea("2.2.2", 4, new Media()), 
  ], new Maxima()), 
], new Maxima());

const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6 , new Media()),
  new Tarea("3.2", 3 ,new Media()),
], new Maxima());

const t4 = new Tarea("1", 3 , new Maxima());
const t5 = new Tarea("1", 3 , new Maxima());
const t6 = new Tarea("1", 3 , new Maxima());
const t7 = new TareaCompuesta("1",3,[t4,t5,t6],new Maxima())

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracion()}`);
console.log(`Costo Total: ${proyecto.getCosto()}`);
