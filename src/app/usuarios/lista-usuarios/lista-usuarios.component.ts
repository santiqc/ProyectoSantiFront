import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];  


  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.cargarUsuarios();
  }
cargarUsuarios() {
  this.usuarioService.list().subscribe(
    data => {
      this.usuarios = data;
      console.log(data);
    }
  );}
}
