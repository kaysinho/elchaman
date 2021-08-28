import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraciasComponent } from './componentes/gracias/gracias.component';
import { AmarresComponent } from './views/amarres/amarres.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'amarres', component: AmarresComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  // Default page

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
