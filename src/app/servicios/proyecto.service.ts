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

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(proyecto:Proyecto):Observable<any> {
    return this.http.post(this.url + 'crear', proyecto);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, proyecto:Proyecto):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, proyecto);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
