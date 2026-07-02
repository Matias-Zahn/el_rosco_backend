import { Router } from "express";
import { ConexionBD } from "../config/";
import { UsuarioController } from "../controllers/usuario.controller";
import { UsuarioModel } from "../models/usuario.model";
import { UsuarioService } from "../services/usuario.service";

export class UsuarioRoutes {
  static getRoutes(): Router {
    const router = Router();
    const conexion = ConexionBD.getPool();

    const userModel = new UsuarioModel(conexion);
    const userService = new UsuarioService(userModel);
    const userController = new UsuarioController(userService);

    router.post("/registro", userController.registrarUsuario);
    router.post("/login", userController.loginUsuario);

    return router;
  }
}
