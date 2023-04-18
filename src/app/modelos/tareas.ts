export class Tareas {

    id : Number;
    tarea : String;
    proyecto_id : Number;

    constructor(id : Number, tarea : String, proyecto_id : Number) {
        this.id = id;
        this.tarea = tarea;
        this.proyecto_id = proyecto_id;
    }

}
