import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'http://localhost:8080/proyecto/';

  constructor(private http:HttpClient) { }

  public getProyectos():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getProyecto(proyecto:Proyecto):Observable<any> {
    return this.http.get(this.url + 'traer/' + proyecto.id);
  }

  public putProyecto(proyecto:Proyecto):Observable<any> {
    return this.http.put(this.url + 'editar/' + proyecto.id, proyecto);
  }

}
