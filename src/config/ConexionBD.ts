import mysql, { Pool } from "mysql2/promise";

export class ConexionBD {
  private static pool: Pool;

  public static getPool(): Pool {
    // Si el pool no existe, lo creamos una sola vez (Singleton)
    if (!ConexionBD.pool) {
      ConexionBD.pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "", // Tu contraseña de MySQL
        database: "el_rosco_db",
        waitForConnections: true,
        connectionLimit: 10, // Máximo de conexiones simultáneas que manejará el pool
        queueLimit: 0,
      });
      console.log("¡Pool de conexiones a MySQL inicializado con éxito!");
    }

    return ConexionBD.pool;
  }
}
