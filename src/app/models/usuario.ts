export class Usuario {
    id?: number;
    nombre: string;
    nombreUsuario: string;
    email: string;
    roles: Role[];
    
  constructor(id?: number, nombre?: string, nombreUsuario?: string, email?: string, roles?: Role[]) {
    this.id = id;
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