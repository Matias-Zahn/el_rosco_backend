import express from "express";
import cors from "cors";
import { envs } from "./config/envs";
import { UsuarioRoutes } from "./routes/usuario.routes";
import { PartidaRoutes } from "./routes/partida.routes"; // 1. Importamos tus nuevas rutas

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
  res.json({ message: "HOLA" });
});

app.use("/api/usuarios", UsuarioRoutes.getRoutes());
app.use("/api/partidas", PartidaRoutes.getRoutes());

app.listen(envs.PORT, () => {
  console.log(`SERVIDOR corriendo en el puerto ${envs.PORT}`);
});
