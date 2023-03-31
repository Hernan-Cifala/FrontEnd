import { Component } from '@angular/core';
import { ConocimientosService } from 'src/app/servicios/conocimientos.service';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  formacion:any;
  conocimientos:any;

  constructor(private servicioF:FormacionService, private servicioC:ConocimientosService) { }

  ngOnInit(): void {
    this.servicioF.getFormaciones().subscribe(data => {
      this.formacion = data;
    })
    this.servicioC.getConocimientos().subscribe(data => {
      this.conocimientos = data;
    })
  }

}
