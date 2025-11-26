import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImportsModule } from '../../imports';
import { Router, RouterOutlet } from '@angular/router';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, ImportsModule, ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {

  usuario: Usuario = {} as Usuario;
  
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

// usuariosFormArray = new FormArray<FormGroup<Usuario>>([
// 	this.usuarioFormGroup
// ]);


  	constructor(private router: Router) {}

	nuevoUsuario() {
		if (this.usuarioFormGroup.valid) {
			this.usuario = this.usuarioFormGroup.value as Usuario;
			console.log('Nuevo usuario creado: ', this.usuario);
		}
	}
}
