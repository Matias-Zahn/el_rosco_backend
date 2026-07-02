import { Connection } from "mysql2/promise";

export class PartidaModel {
  constructor(private readonly conexion: Connection) {}

  public async crearPartida(
    usuarioId: number,
    dificultadId: number,
    tiempoMaximo: number,
    ayudaAdicional: boolean,
  ) {
    const query = `
      INSERT INTO partidas (usuario_id, dificultad_id, tiempo_maximo, ayuda_adicional)
      VALUES (?, ?, ?, ?);
    `;

    const [result] = await this.conexion.execute(query, [
      usuarioId,
      dificultadId,
      tiempoMaximo,
      ayudaAdicional,
    ]);

    /* En los INSERT, 'result' contiene un objeto de tipo ResultSetHeader.
      Accedemos a 'insertId' para obtener el ID único generado por la base de datos
      y se lo retornamos al Service.
    */
    return (result as any).insertId;
  }
}
