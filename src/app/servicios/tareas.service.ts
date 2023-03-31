import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tareas } from '../modelos/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url = 'http://localhost:8080/tareas/';

  constructor(private http:HttpClient) { }

  public getTareas():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getTarea(tareas:Tareas):Observable<any> {
    return this.http.get(this.url + 'traer/' + tareas.id);
  }

  public putTareas(tareas:Tareas):Observable<any> {
    return this.http.put(this.url + 'editar/' + tareas.id, tareas);
  }

}
