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

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(formacion:Formacion):Observable<any> {
    return this.http.post(this.url + 'crear', formacion);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, formacion:Formacion):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, formacion);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
