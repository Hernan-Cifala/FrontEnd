import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias:any;
  ocultar:boolean = false;

  constructor(private servicio:ExperienciaService) { }

  ngOnInit(): void {
    this.servicio.get().subscribe(data => {
      this.experiencias = data;
      
      if (this.experiencias.length == 0) {
        this.ocultar = true;
      }
      else {
        this.ocultar = false;
      }
    })
  }

}
