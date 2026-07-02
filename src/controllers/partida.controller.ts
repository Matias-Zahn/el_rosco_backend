import { Request, Response } from "express";
import { PartidaService } from "../services/partida.service";
import { ConfigurarPartidaDto } from "../dtos";
import { CustomError } from "../errors/CustomErros";

export class PartidaController {
  constructor(private readonly partidaService: PartidaService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.error(error);
    return res.status(500).json({ error: "Error interno en el servidor" });
  };

  public configurarPartida = (req: Request, res: Response) => {
    const [error, configurarPartidaDto] = ConfigurarPartidaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const usuarioId = Number(req.body.usuarioId);
    if (!usuarioId || isNaN(usuarioId)) {
      return res
        .status(400)
        .json({
          error: "Falta el identificador del usuario para iniciar la partida",
        });
    }

    this.partidaService
      .generarPartida(configurarPartidaDto!, req.body.usuarioId)
      .then((partidaInfo) => res.status(201).json(partidaInfo))
      .catch((err) => this.handleError(err, res));
  };
}
