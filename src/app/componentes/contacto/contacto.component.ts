import { Component } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contacto:any;

  constructor(private servicio:ContactoService) { }

  ngOnInit(): void {
    this.servicio.getContactos().subscribe(data => {
      this.contacto = data;
    })
  }

}
