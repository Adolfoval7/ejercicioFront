import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModule } from './usuarios/usuario.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
