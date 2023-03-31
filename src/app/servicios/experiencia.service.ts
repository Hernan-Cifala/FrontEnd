import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'http://localhost:8080/experiencia/';

  constructor(private http:HttpClient) { }

  public getExperiencias():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getExperiencia(experiencia:Experiencia):Observable<any> {
    return this.http.get(this.url + 'traer/' + experiencia.id);
  }

  public putExperiencia(experiencia:Experiencia):Observable<any> {
    return this.http.put(this.url + 'editar/' + experiencia.id, experiencia);
  }

}
