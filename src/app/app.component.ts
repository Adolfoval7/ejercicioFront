import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { UsuarioModule } from './usuarios/usuario.module';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ImportsModule } from './imports';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterModule, RouterOutlet, ConfirmDialog,
    ImportsModule, ToastModule, DialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejercicioFront';

  ngOnInit(): void {
      
  }
}