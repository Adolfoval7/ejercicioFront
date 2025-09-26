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
  imports: [CommonModule, FormsModule, ImportsModule, RouterOutlet],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
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
    this.usuariosService.listadoUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.hayUsuarios = this.usuarios.length === 0;
    });
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
