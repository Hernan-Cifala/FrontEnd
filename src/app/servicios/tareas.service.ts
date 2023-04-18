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

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(tareas:Tareas):Observable<any> {
    return this.http.post(this.url + 'crear', tareas);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, tareas:Tareas):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, tareas);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
