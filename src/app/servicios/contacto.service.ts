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

  public getContactos():Observable<any> {
    return this.http.get(this.url + 'traer');
  }

  public getContacto(contacto:Contacto):Observable<any> {
    return this.http.get(this.url + 'traer/' + contacto.id);
  }

  public putContacto(contacto:Contacto):Observable<any> {
    return this.http.put(this.url + 'editar/' + contacto.id, contacto);
  }

}
