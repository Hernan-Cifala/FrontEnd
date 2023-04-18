import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AdminComponent } from './componentes/admin/admin.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    LoginComponent,
    ExperienciaComponent,
    PortfolioComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
