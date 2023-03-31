export class Persona {

    id : Number;
    nombre : String;
    apellido : String;
    titulo : String;
    resumen : String;
    foto : String;

    email : String;
    contraseña : String;

    constructor(id : Number, nombre : String, apellido : String, titulo : String, resumen : String, foto : String, email : String, contraseña : String) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.resumen = resumen;
        this.foto = foto;
        this.email = email;
        this.contraseña = contraseña;
    }
    
}
