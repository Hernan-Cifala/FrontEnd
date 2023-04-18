export class Conocimientos {

    id : Number;
    conocimiento : String;
    formacion_id : Number;

    constructor(id : Number, conocimiento : String, formacion_id : Number) {
        this.id = id;
        this.conocimiento = conocimiento;
        this.formacion_id = formacion_id;
    }

}
