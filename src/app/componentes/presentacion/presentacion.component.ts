import { Component } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {

  personas:any;

  constructor(private servicio:PersonaService) { }

  ngOnInit(): void {

    this.servicio.get().subscribe(data => {
      this.personas = data;
    })
  }

}
