import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../imports';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ImportsModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent {

	constructor(private messageService: MessageService) {}

  	usuarioFormGroup = new FormGroup({
		numeroUsuario: new FormControl<number>(0, {nonNullable: true, validators: [
			Validators.required,
		  Validators.min(10000000),
			Validators.max(99999999)
		]}),
	
		nombreUsuario: new FormControl<string>('', {nonNullable: true, validators: [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(20)
		]}),

		apellidoUsuario: new FormControl<string>('', {nonNullable: true, validators: [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(20)
		]}),

		emailUsuario: new FormControl<string>('', {nonNullable: true, validators: [
			Validators.required,
			Validators.email,
			Validators.minLength(10),
			Validators.maxLength(50)
		]}),

		telefonoUsuario: new FormControl<string>('', {nonNullable: true, validators: [
			Validators.required,
			Validators.minLength(10),
			Validators.maxLength(10)
		]}),

	});

	confirmarCambios(){
		// Lógica para confirmar los cambios del usuario
		this.messageService.add({ severity: 'success', summary: 'Cambios confirmados', detail: 'Los cambios se han guardado exitosamente.' });
	}

	cancelarCambios(){
		// Lógica para cancelar los cambios del usuario
		this.messageService.add({ severity: 'info', summary: 'Cambios cancelados', detail: 'Los cambios han sido cancelados.' });
	}
}
