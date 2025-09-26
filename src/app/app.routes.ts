import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'Home', component: AppComponent},
    { path: 'Usuarios', component: ListadoUsuariosComponent}
];
