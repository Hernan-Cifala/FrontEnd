import { Component } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { HerramientasService } from 'src/app/servicios/herramientas.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos:any;
  tareas:any;
  herramientas:any;
  modal:Proyecto = {"id": -1, "titulo": "", "subtitulo": "", "descripcion": ""};

  constructor(private servicioP:ProyectoService, private servicioT:TareasService, private servicioH:HerramientasService) { }

  ngOnInit(): void {
    this.servicioP.get().subscribe(data => {
      this.proyectos = data;
    })
    this.servicioT.get().subscribe(data => {
      this.tareas = data;
    })
    this.servicioH.get().subscribe(data => {
      this.herramientas = data;
    })
  }

  setActual(proyecto:Proyecto) {
    this.modal = proyecto;
  }

}
