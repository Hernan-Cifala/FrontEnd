export class Persona {

    id : Number;
    nombre : String;
    apellido : String;
    titulo : String;
    resumen : String;
    foto : String;

    constructor(id : Number, nombre : String, apellido : String, titulo : String, resumen : String, foto : String) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.resumen = resumen;
        this.foto = foto;
    }
    
}
