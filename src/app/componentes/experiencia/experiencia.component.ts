import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experiencia:any;

  constructor(private servicio:ExperienciaService) { }

  ngOnInit(): void {
    this.servicio.getExperiencias().subscribe(data => {
      this.experiencia = data;
    })
  }

}
