import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  id:number;
  usuario: Usuario= new Usuario();
  constructor(
    private usuarioService : UsuarioService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { 
    
  }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.usuarioService.detail(this.id).subscribe(
      data => {
        this.usuario = data;
      },err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.onBack();
      }
    );
   
  }

  onUpdate():void{
    console.log(this.id)
    this.usuarioService.update(this.id, this.usuario).subscribe(
      data => {
        this.toastr.success('Usuario Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/usuarios']);
      },
      err=>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        //this.router.navigate(['/']);
        console.log(err);
      }
      );
  }

  onBack():void{
    this.router.navigate(['/usuarios']);
  }


}
