import { Router } from "express";
import { ConexionBD } from "../config";
import { PartidaController } from "../controllers/partida.controller";
import { PalabraModel } from "../models/palabra.model";
import { PartidaModel } from "../models/partida.model";
import { PartidaService } from "../services/partida.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class PartidaRoutes {
  static getRoutes(): Router {
    const router = Router();

    const conexion = ConexionBD.getPool();
    const palabraModel = new PalabraModel(conexion);
    const partidaModel = new PartidaModel(conexion);

    const partidaService = new PartidaService(palabraModel, partidaModel);

    const partidaController = new PartidaController(partidaService);

    router.get("/estadisticas", partidaController.obtenerEstadisticas);

    router.get(
      "/mejores",
      AuthMiddleware.validarJWT,
      partidaController.obtenerMejoresPartidas,
    );

    router.post(
      "/configurar",
      AuthMiddleware.validarJWT,
      partidaController.configurarPartida,
    );

    router.patch(
      "/finalizar",
      AuthMiddleware.validarJWT,
      partidaController.finalizarPartida,
    );

    return router;
  }
}
