import { Component } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyecto:any;
  tareas:any;

  constructor(private servicioP:ProyectoService, private servicioT:TareasService) { }

  ngOnInit(): void {
    this.servicioP.getProyectos().subscribe(data => {
      this.proyecto = data;
    })
    this.servicioT.getTareas().subscribe(data => {
      this.tareas = data;
    })
  }

}
