import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosURL= environment.authURL;

  constructor( private httpClient: HttpClient) { }

  public list(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuariosURL + 'usuarios');
}
}