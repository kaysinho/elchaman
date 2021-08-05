import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
  { path: '',  redirectTo: '/inicio', pathMatch: 'full' },  // Default page

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
