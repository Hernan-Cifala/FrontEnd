import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(persona:Persona):Observable<any> {
    return this.http.post(this.url + 'crear', persona);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, persona:Persona):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, persona);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
