import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url = 'https://portfolio-backend-ywnb.onrender.com/habilidad/';

  constructor(private http:HttpClient) { }

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(habilidad:Habilidad):Observable<any> {
    return this.http.post(this.url + 'crear', habilidad);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, habilidad:Habilidad):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, habilidad);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
