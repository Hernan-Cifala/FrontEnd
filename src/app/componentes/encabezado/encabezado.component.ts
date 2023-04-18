import { Component } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  contactos:any;

  constructor(private servicio:ContactoService) { }

  ngOnInit(): void {
    this.servicio.get().subscribe(data => {
      this.contactos = data;
    })
  }

}
