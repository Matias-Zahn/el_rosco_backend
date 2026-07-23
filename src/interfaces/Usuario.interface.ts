export interface IUsuario {
  id_usuario?: number;
  nombre_usuario: string;
  password: string;
  email: string;
  fecha_nacimiento: string | Date;
}
