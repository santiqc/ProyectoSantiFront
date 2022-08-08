import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


//external 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuarios/nuevo-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    ListaUsuariosComponent,
    EditUsuarioComponent,
    DetalleUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
