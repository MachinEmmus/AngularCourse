import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario();
  constructor() { 
    this.usuario.usuarioId = 1;
    this.usuario.nombre = "Emmus";
    this.usuario.apellido = "Monsalve"
  }
  
}
