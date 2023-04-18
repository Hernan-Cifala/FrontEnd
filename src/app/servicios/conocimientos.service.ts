import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conocimientos } from '../modelos/conocimientos';

@Injectable({
  providedIn: 'root'
})
export class ConocimientosService {

  url = 'http://localhost:8080/conocimientos/';

  constructor(private http:HttpClient) { }

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(conocimientos:Conocimientos):Observable<any> {
    return this.http.post(this.url + 'crear', conocimientos);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, conocimientos:Conocimientos):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, conocimientos);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
