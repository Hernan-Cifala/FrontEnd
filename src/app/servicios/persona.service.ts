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

  public getPersonas():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getPersona(persona:Persona):Observable<any> {
    return this.http.get(this.url + 'traer/' + persona.id);
  }

  public putPersona(persona:Persona):Observable<any> {
    return this.http.put(this.url + 'editar/' + persona.id, persona);
  }

}
