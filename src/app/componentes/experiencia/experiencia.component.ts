import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experiencias:any;

  constructor(private servicio:ExperienciaService) { }

  ngOnInit(): void {
    this.servicio.get().subscribe(data => {
      this.experiencias = data;
    })
  }

}
