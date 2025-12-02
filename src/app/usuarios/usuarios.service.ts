import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlGlobal = 'https://studious-invention-x55wvj49wxxf6w5p-9090.app.github.dev/api';

  constructor(private clienteHttp: HttpClient) { }

  // Nuevo usuario
  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(this.urlGlobal, usuario, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Listado de usuarios
  listadoUsuarios(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.urlGlobal)
      .pipe(catchError(this.handleError));
  }

  // Actualizar usuario
  actualizaUsuario(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.put<Usuario>(this.urlGlobal, usuario, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Eliminar usuario
  eliminaUsuario(numUsuario: number): Observable<Boolean> {
    return this.clienteHttp.delete<Boolean>(this.urlGlobal + '/' + numUsuario)
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
