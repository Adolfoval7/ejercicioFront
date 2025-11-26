import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';

export const routes: Routes = [
    { path: 'Home', component: AppComponent},
    { path: 'listadoUsuarios', component: ListadoUsuariosComponent},
    { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
    { path: 'detalleUsuario', component: DetalleUsuarioComponent}
];
