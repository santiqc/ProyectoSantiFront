export class Usuario {
    id?: number;
    nombre: string;
    nombreUsuario: string;
    email: string;
    roles: Role[];
    
  constructor(nombre?: string, nombreUsuario?: string, email?: string, roles?: Role[]) {
    this.nombre = nombre;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.roles = roles;
  }

    
}
interface Role {
    id: number;
    rolNombre: String;
}