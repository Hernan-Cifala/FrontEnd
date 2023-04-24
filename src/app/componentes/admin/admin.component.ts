import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Conocimientos } from 'src/app/modelos/conocimientos';
import { Contacto } from 'src/app/modelos/contacto';
import { Experiencia } from 'src/app/modelos/experiencia';
import { Formacion } from 'src/app/modelos/formacion';
import { Habilidad } from 'src/app/modelos/habilidad';
import { Herramientas } from 'src/app/modelos/herramientas';
import { Persona } from 'src/app/modelos/persona';
import { Proyecto } from 'src/app/modelos/proyecto';
import { Tareas } from 'src/app/modelos/tareas';

import { ConocimientosService } from 'src/app/servicios/conocimientos.service';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { HerramientasService } from 'src/app/servicios/herramientas.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  conocimientos:any;
  contactos:any;
  experiencias:any;
  formaciones:any;
  habilidades:any;
  herramientas:any;
  personas:any;
  proyectos:any;
  tareas:any;

  Conocimiento:Conocimientos = new Conocimientos(0,"",0);
  Contacto:Contacto = new Contacto(0,"","");
  Experiencia:Experiencia = new Experiencia(0,"",false,"","","","","");
  Formacion:Formacion = new Formacion(0,"","","");
  Habilidad:Habilidad = new Habilidad(0,"");
  Herramienta:Herramientas = new Herramientas(0,"",0);
  Persona:Persona = new Persona(0,"","","","","");
  Proyecto:Proyecto = new Proyecto(0,"","","");
  Tarea:Tareas = new Tareas(0,"",0);

  elemento:any;
  servicio:any;

  constructor(private login:LoginService, private router:Router,
    public servicioCono:ConocimientosService, public servicioConta:ContactoService,
    public servicioExpe:ExperienciaService, public servicioForma:FormacionService,
    public servicioHabi:HabilidadService, public servicioHerra:HerramientasService,
    public servicioPerso:PersonaService, public servicioProye:ProyectoService,
    public servicioTare:TareasService) { }

  ngOnInit(): void {
    this.getElementos();
    this.elemento = new class{};
  }

  getElementos() {
    this.servicioCono.get().subscribe(data => {
      this.conocimientos = data;
    })
    this.servicioConta.get().subscribe(data => {
      this.contactos = data;
    })
    this.servicioExpe.get().subscribe(data => {
      this.experiencias = data;
    })
    this.servicioForma.get().subscribe(data => {
      this.formaciones = data;
    })
    this.servicioHabi.get().subscribe(data => {
      this.habilidades = data;
    })
    this.servicioHerra.get().subscribe(data => {
      this.herramientas = data;
    })
    this.servicioPerso.get().subscribe(data => {
      this.personas = data;
    })
    this.servicioProye.get().subscribe(data => {
      this.proyectos = data;
    })
    this.servicioTare.get().subscribe(data => {
      this.tareas = data;
    })
  }

  setActual(elemento:any, servicio:any) {
    this.elemento = elemento;
    this.servicio = servicio;
    console.log(this.elemento);
  }

  eliminar() {
    console.log("Se ha eliminado " + this.elemento);
    this.servicio.delete(this.elemento.id).subscribe((data: any) => {
      console.log(data);
    })
  }
  
  crear(elemento:any) {
    console.log("Se ha creado: " + elemento);
    this.servicio.post(elemento).subscribe((data: any) => {
      console.log(data);
    })
  }

  editar(elemento:any) {
    console.log("Se ha editado: " + elemento);
    this.servicio.put(this.elemento.id, elemento).subscribe((data: any) => {
      console.log(data);
    })
  }

  onLogout() {
    this.login.logout()
      .then(response => {
      console.log(response);
      console.log("Exito al cerrar sesion");
      this.router.navigate(['/portfolio']);
    })
      .catch(error => { 
        console.log(error);
        console.log("Fallo al cerrar sesion");
    })
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
