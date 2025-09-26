import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlGlobal = 'http://localhost:8080/api/usuarios/';

  constructor(private clienteHttp: HttpClient) { }

  // Nuevo usuario
  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(this.urlGlobal + 'nuevoUsuario', usuario, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Listado de usuarios
  listadoUsuarios(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.urlGlobal + 'listadoUsuarios')
      .pipe(catchError(this.handleError));
  }

  // Actualizar usuario
  actualizaUsuario(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.put<Usuario>(this.urlGlobal + 'modificaUsuario', usuario, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Eliminar usuario
  eliminaUsuario(numUsuario: number): Observable<Boolean> {
    return this.clienteHttp.delete<Boolean>(this.urlGlobal + 'eliminaUsuario/' + numUsuario)
      .pipe(catchError(this.handleError));
  }

  // Obtener usuario con tareas
  buscaTareasxUsuario(numUsuario: number): Observable<Usuario> {
    return this.clienteHttp.get<Usuario>(this.urlGlobal + 'tareasxUsuario/' + numUsuario)
      .pipe(catchError(this.handleError));
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError(error: any) {
    console.error('Ocurrió un error: ', error);
    return throwError(() => new Error('Error en la petición HTTP'));
  }
}
