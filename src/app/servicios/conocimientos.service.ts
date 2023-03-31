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

  public getConocimientos():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getConocimiento(conocimientos:Conocimientos):Observable<any> {
    return this.http.get(this.url + 'traer/' + conocimientos.id);
  }

  public putConocimientos(conocimientos:Conocimientos):Observable<any> {
    return this.http.put(this.url + 'editar/' + conocimientos.id, conocimientos);
  }

}
