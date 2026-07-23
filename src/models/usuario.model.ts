import { IUsuario } from "../interfaces";
import { Connection, ResultSetHeader, RowDataPacket } from "mysql2/promise";

export class UsuarioModel {
  constructor(private readonly conexion: Connection) {}

  public async buscarPorNombreUsuario(
    nombre: string,
  ): Promise<IUsuario | null> {
    const sql =
      "SELECT id_usuario, nombre_usuario, password FROM usuarios WHERE nombre_usuario = ?";

    const [rows] = await this.conexion.query<RowDataPacket[]>(sql, [nombre]);

    if (rows.length > 0) {
      return rows[0] as IUsuario;
    }

    return null;
  }

  public async insertarUsuario(usuario: IUsuario): Promise<Number> {
    const sql = `
      INSERT INTO usuarios (nombre_usuario, password, email, fecha_nacimiento) 
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await this.conexion.query<ResultSetHeader>(sql, [
      usuario.nombre_usuario,
      usuario.password,
      usuario.email,
      usuario.fecha_nacimiento,
    ]);

    return result.insertId;
  }
}
