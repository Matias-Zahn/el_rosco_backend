import { NextFunction, Request, Response } from "express";
import { JWTAdpater } from "../config";
import { brotliDecompress } from "node:zlib";

export class AuthMiddleware {
  static validarJWT = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const autorizacion = req.header("Authorization");

    if (!autorizacion) {
      res
        .status(401)
        .json({ error: "No se proporciono ningun token de autenticacion" });
      return;
    }

    if (!autorizacion.startsWith("Bearer ")) {
      res.status(401).json({ error: "Formato de token inválido" });
      return;
    }

    const token = autorizacion.split(" ").at(1) || "";

    const payload = await JWTAdpater.validateToken<{ id: number }>(token);

    if (!payload) {
      res.status(401).json({ error: "Token no válido o expirado" });
      return;
    }

    req.body = req.body || {};
    req.body.usuarioId = payload.id;

    next();
  };
}
