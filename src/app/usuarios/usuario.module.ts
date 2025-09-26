import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuarios.service';
import { FormsModule } from '@angular/forms';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListadoUsuariosComponent,
  ],
  providers: [UsuariosService],
  exports: [ListadoUsuariosComponent]
})
export class UsuarioModule { }
