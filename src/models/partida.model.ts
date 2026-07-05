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
      SET puntaje_final = ?, fecha_fin = NOW()
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

  public async obtenerMejoresPartidas(usuarioId: number) {
    const query =
      "SELECT id, dificultad_id, tiempo_maximo, ayuda_adicional, puntaje_final, fecha_fin FROM partidas WHERE usuario_id = ? AND puntaje_final IS NOT NULL ORDER BY puntaje_final DESC LIMIT 3";

    try {
      const [rows] = await this.conexion.execute(query, [usuarioId]);
      return rows;
    } catch (error) {
      throw CustomError.internalServerError(
        "Error en la base de datos al buscar el historial",
      );
    }
  }

  public async obtenerRankingGeneral() {
    const query = `
      SELECT u.nombre_usuario, p.puntaje_final, p.dificultad_id 
      FROM partidas p 
      INNER JOIN usuarios u ON p.usuario_id = u.id_usuario 
      WHERE p.puntaje_final IS NOT NULL 
      ORDER BY p.puntaje_final DESC 
      LIMIT 10
    `;

    const [rows] = await this.conexion.execute(query);
    return rows;
  }

  // 2. Jugador más ganador (el que sacó 27 puntos más veces)
  async obtenerMasGanadorGeneral() {
    const query = `
      SELECT u.nombre_usuario, COUNT(p.id) as victorias 
      FROM partidas p 
      INNER JOIN usuarios u ON p.usuario_id = u.id_usuario 
      WHERE p.puntaje_final = 27 
      GROUP BY u.id_usuario, u.nombre_usuario 
      ORDER BY victorias DESC 
      LIMIT 1
    `;
    const [rows] = await this.conexion.execute(query);
    return rows as any;
  }

  async obtenerMasRapidos() {
    // Calculamos la diferencia en segundos entre el inicio y el fin.
    // Solo traemos a los que sacaron puntaje perfecto (27).
    const query = `
      SELECT u.nombre_usuario, 
             TIMESTAMPDIFF(SECOND, p.fecha_inicio, p.fecha_fin) as segundos_tardados, 
             p.puntaje_final 
      FROM partidas p 
      INNER JOIN usuarios u ON p.usuario_id = u.id_usuario 
      WHERE p.puntaje_final = 27 AND p.fecha_fin IS NOT NULL
      ORDER BY segundos_tardados ASC 
      LIMIT 5
    `;
    const [rows] = await this.conexion.execute(query);
    return rows;
  }

  async obtenerMasGanadorPorDificultad(dificultadId: number) {
    const query = `
      SELECT u.nombre_usuario, COUNT(p.id) as victorias 
      FROM partidas p 
      INNER JOIN usuarios u ON p.usuario_id = u.id_usuario 
      WHERE p.puntaje_final = 27 AND p.dificultad_id = ?
      GROUP BY u.id_usuario, u.nombre_usuario 
      ORDER BY victorias DESC 
      LIMIT 1
    `;

    try {
      const [rows] = await this.conexion.execute(query, [dificultadId]);
      return rows as any;
    } catch (error) {
      console.error(
        `Error al obtener el más ganador de la dificultad ${dificultadId}:`,
        error,
      );
      throw CustomError.internalServerError(
        "Error en la base de datos al calcular estadísticas por dificultad",
      );
    }
  }
}
