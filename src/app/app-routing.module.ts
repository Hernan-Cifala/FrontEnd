import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'admin', component: AdminComponent, ...canActivate(()=> redirectUnauthorizedTo(['portfolio']))},
    {path: '', redirectTo: 'portfolio', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }