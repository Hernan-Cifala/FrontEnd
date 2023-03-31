import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url = 'http://localhost:8080/habilidad/';

  constructor(private http:HttpClient) { }

  public getHabilidades():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getHabilidad(habilidad:Habilidad):Observable<any> {
    return this.http.get(this.url + 'traer/' + habilidad.id);
  }

  public putHabilidad(habilidad:Habilidad):Observable<any> {
    return this.http.put(this.url + 'editar/' + habilidad.id, habilidad);
  }

}
