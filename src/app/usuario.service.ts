import { Injectable } from '@angular/core';
import { Usuario } from './usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
  	let usuario = new Usuario()
  	usuario.nome = "Gleidson"
  	usuario.email = "gleidson.duarte@hotmail.com"

  	return usuario
  }

  public listaUsuarios(): Usuario[] {
  	return [
  	{
  	  nome: "Gleidson",
  	  email: "gleidson.duarte@hotmail.com.br"
  	},
  	{
  	  nome: "Maria",
  	  email: "maria@gmail.com"
  	},
  	{
  	  nome: "Pedro",
  	  email: "pedro@yahoo.com"
  	}
  ]
  }
}
