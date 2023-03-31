import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacion } from '../modelos/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  url = 'http://localhost:8080/formacion/';

  constructor(private http:HttpClient) { }

  public getFormaciones():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getFormacion(formacion:Formacion):Observable<any> {
    return this.http.get(this.url + 'traer/' + formacion.id);
  }

  public putFormacion(formacion:Formacion):Observable<any> {
    return this.http.put(this.url + 'editar/' + formacion.id, formacion);
  }

}
