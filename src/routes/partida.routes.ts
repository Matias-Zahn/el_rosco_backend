import { Router } from "express";
import { ConexionBD } from "../config";
import { PartidaController } from "../controllers/partida.controller";
import { PalabraModel } from "../models/palabra.model";
import { PartidaModel } from "../models/partida.model";
import { PartidaService } from "../services/partida.service";

export class PartidaRoutes {
  static getRoutes(): Router {
    const router = Router();

    const conexion = ConexionBD.getPool();
    const palabraModel = new PalabraModel(conexion);
    const partidaModel = new PartidaModel(conexion);

    const partidaService = new PartidaService(palabraModel, partidaModel);

    const partidaController = new PartidaController(partidaService);

    router.post("/configurar", partidaController.configurarPartida);

    return router;
  }
}
