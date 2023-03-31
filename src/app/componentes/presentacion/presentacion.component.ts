import { Component } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {

  persona:any;

  constructor(private servicio:PersonaService) { }

  ngOnInit(): void {
    this.servicio.getPersonas().subscribe(data => {
      this.persona = data;
    })
  }

}
