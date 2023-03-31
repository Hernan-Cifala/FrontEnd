export class Formacion {

    id : Number;
    nombre : String;
    descripcion : String;
    certificacion : String;

    constructor(id : Number, nombre : String, descripcion : String, certificacion : String) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.certificacion = certificacion;
    }

}
