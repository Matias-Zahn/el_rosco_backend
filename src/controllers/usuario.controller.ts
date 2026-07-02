import { error } from "node:console";
import { UsuarioService } from "../services/usuario.service";
import { CustomError } from "../errors/CustomErros";
import { Request, Response } from "express";
import { RegistroUsuarioDto } from "../dtos/registroUsuario.dto";
import { LoginUsuarioDto } from "../dtos";

export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.error(error);
    return res.status(500).json({ error: "Error interno en el servidor" });
  };

  public registrarUsuario = (req: Request, res: Response) => {
    const [error, registrarUsuarioDto] = RegistroUsuarioDto.create(req.body);

    if (error) return res.status(400).json({ error });

    return this.usuarioService
      .registrar(registrarUsuarioDto!)
      .then((usuario) => res.status(201).json({ usuario }))
      .catch((e) => this.handleError(e, res));
  };

  public loginUsuario = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUsuarioDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.usuarioService
      .loguear(loginUserDto!)
      .then((data) => res.status(200).json(data))
      .catch((err) => this.handleError(err, res));
  };
}
