import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../modelos/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url = 'http://localhost:8080/contacto/';

  constructor(private http:HttpClient) { }

  public get():Observable<any> {
    return this.http.get<any[]>(this.url + 'traer');
  }

  public post(contacto:Contacto):Observable<any> {
    return this.http.post(this.url + 'crear', contacto);
  }

  public getById(id:number):Observable<any> {
    return this.http.get<any>(this.url + 'traer/' + id);
  }

  public put(id:number, contacto:Contacto):Observable<any> {
    return this.http.put(this.url + 'editar/' + id, contacto);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete(this.url + 'borrar/' + id);
  }

}
