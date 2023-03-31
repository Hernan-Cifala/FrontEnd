export class Experiencia {

    id : Number;
    nombre : String;
    actual : Boolean;
    inicio : Date;
    fin : Date;
    logo : String;
    descripcion : String;
    tipo : String;

    constructor(id : Number, nombre : String, actual : Boolean, inicio : Date, fin : Date, logo : String, descripcion : String, tipo : String) {
        this.id = id;
        this.nombre = nombre;
        this.actual = actual;
        this.inicio = inicio;
        this.fin = fin;
        this.logo = logo;
        this.descripcion = descripcion;
        this.tipo = tipo;
    }

}
