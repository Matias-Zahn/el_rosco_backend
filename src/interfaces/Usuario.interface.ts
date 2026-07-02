export interface IUsuario {
  id_usuario?: number; // Opcional porque al insertar no lo tenés, lo genera MySQL
  nombre_usuario: string;
  password: string; // Le ponemos hash para recordar que viaja encriptada
  email: string;
  fecha_nacimiento: string | Date;
}
