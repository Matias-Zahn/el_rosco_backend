import { Connection } from "mysql2/promise";
import { CustomError } from "../errors/CustomErros";

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

  async registrarFinPartida(
    partidaId: number,
    usuarioId: number,
    puntajeFinal: number,
  ): Promise<boolean> {
    // Incluimos el usuario_id en el WHERE por pura seguridad.
    // Así evitamos que alguien intente mandarle puntaje a una partida que no es suya.
    const query = `
      UPDATE partidas 
      SET puntaje_final = ? 
      WHERE id = ? AND usuario_id = ? AND puntaje_final IS NULL
    `;

    try {
      const [result] = await this.conexion.execute(query, [
        puntajeFinal,
        partidaId,
        usuarioId,
      ]);

      // Si affectedRows es mayor a 0, la actualización se hizo de forma exitosa
      return (result as any).affectedRows > 0;
    } catch (error) {
      console.error("Error al registrar el fin de la partida:", error);
      throw CustomError.internalServerError(
        "Error en la base de datos al guardar el puntaje",
      );
    }
  }
}
