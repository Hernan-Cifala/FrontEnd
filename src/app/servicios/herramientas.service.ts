import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Herramientas } from '../modelos/herramientas';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  url = 'https://portfolio-backend-ywnb.onrender.com/herramientas/';

  constructor(private http:HttpClient) { }

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(herramientas:Herramientas):Observable<any> {
    return this.http.post(this.url + 'crear', herramientas);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, herramientas:Herramientas):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, herramientas);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
