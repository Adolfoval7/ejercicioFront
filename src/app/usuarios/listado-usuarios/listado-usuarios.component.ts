import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from '../../imports';
import { Router, RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ImportsModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit{
  usuarios: Usuario[] = [];
  hayUsuarios: boolean = false;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // this.usuariosService.listadoUsuarios().subscribe((usuarios) => {
    //   this.usuarios = usuarios;
    //   this.hayUsuarios = this.usuarios.length > 0;
    // });

    this.usuarios = [{
      numeroUsuario: 1,
      nombreUsuario: 'Juan',
      apellidoUsuario: 'Pérez',
      emailUsuario: 'juan.perez@email.com',
      telefonoUsuario: '123456789'
    },
    {
      numeroUsuario: 2,
      nombreUsuario: 'Ana',
      apellidoUsuario: 'García',
      emailUsuario: 'ana.garcia@email.com',
      telefonoUsuario: '987654321'
    }];
    this.hayUsuarios = this.usuarios.length > 0;
  }

  eliminarUsuario(numero_usuario: number, event: Event) {
    this.confirmationService.confirm({
      message: '¿Quieres eliminar este usuario?',
      header: 'Importante',
      icon: 'pi pi-info',
      defaultFocus: 'reject',
      accept: () => {
        this.usuariosService.eliminaUsuario(numero_usuario).subscribe((response) => {
          console.log('Usuario eliminado: ', response);
          this.ngOnInit();
        });
        this.messageService.add({ severity: 'info', summary: 'Usuario Eliminado', detail: 'Usuario eliminado con éxito.' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelada', detail: 'La acción ha sido cancelada.' });
      }
    });
  }
}
