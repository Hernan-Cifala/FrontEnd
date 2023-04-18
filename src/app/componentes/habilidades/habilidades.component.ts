import { Component } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  habilidad:any;

  constructor(private servicio:HabilidadService) { }

  ngOnInit(): void {
    this.servicio.get().subscribe(data => {
      this.habilidad = data;
    })
  }

}
