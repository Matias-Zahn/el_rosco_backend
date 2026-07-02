import { Connection } from "mysql2/promise";
import { Palabra } from "../interfaces/Palabra.interface";

export class PalabraModel {
  constructor(private readonly conexion: Connection) {}

  public async obtenerRoscoPalabra(dificultadId: number): Promise<Palabra[]> {
    const query = `
      WITH PalabrasAleatorias AS (
        SELECT 
          id, 
          letra, 
          palabra, 
          definicion,
          ROW_NUMBER() OVER(PARTITION BY letra ORDER BY RAND()) as rn
        FROM palabras
        WHERE dificultad_id = ?
      )
      SELECT id, letra, palabra, definicion
      FROM PalabrasAleatorias
      WHERE rn = 1
      ORDER BY letra ASC;
    `;

    const [rows] = await this.conexion.execute(query, [dificultadId]);

    return rows as Palabra[];
  }
}
