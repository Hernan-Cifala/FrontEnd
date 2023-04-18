import { Component } from '@angular/core';
import { Formacion } from 'src/app/modelos/formacion';
import { ConocimientosService } from 'src/app/servicios/conocimientos.service';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  formaciones:any;
  conocimientos:any;
  modal:any = {"id": -1, "nombre": "", "descripcion": "", "certificacion": ""};

  constructor(private servicioF:FormacionService, private servicioC:ConocimientosService) { }

  ngOnInit(): void {
    this.servicioF.get().subscribe(data => {
      this.formaciones = data;
    })
    this.servicioC.get().subscribe(data => {
      this.conocimientos = data;
    })
  }

  setActual(formacion:Formacion) {
    this.modal = formacion;
  }

}
