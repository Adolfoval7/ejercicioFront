import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import { FormsModule } from '@angular/forms';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListadoUsuariosComponent,
    NuevoUsuarioComponent,
    DetalleUsuarioComponent
  ],
  providers: [UsuariosService],
  exports: [ListadoUsuariosComponent, NuevoUsuarioComponent, DetalleUsuarioComponent]
})
export class UsuarioModule { }
