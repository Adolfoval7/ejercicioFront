import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../imports';


@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ImportsModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent {


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
}
