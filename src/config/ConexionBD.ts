import mysql, { Pool } from "mysql2/promise";

export class ConexionBD {
  private static pool: Pool;

  public static getPool(): Pool {
    if (!ConexionBD.pool) {
      ConexionBD.pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "el_rosco_db",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log("¡Pool de conexiones a MySQL inicializado con éxito!");
    }

    return ConexionBD.pool;
  }
}
