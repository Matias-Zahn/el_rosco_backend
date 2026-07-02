import { Request, Response } from "express";
import { PartidaService } from "../services/partida.service";
import { ConfigurarPartidaDto, FinalizarPartidaDto } from "../dtos";
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

    const usuarioId = req.body.usuarioId;

    this.partidaService
      .generarPartida(configurarPartidaDto!, usuarioId)
      .then((partidaInfo) => res.status(201).json(partidaInfo))
      .catch((err) => this.handleError(err, res));
  };

  public finalizarPartida = (req: Request, res: Response) => {
    const [error, finalizarPartidaDto] = FinalizarPartidaDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const usuarioId = req.body.usuarioId;

    this.partidaService
      .finalizarPartida(finalizarPartidaDto!, usuarioId)
      .then((infoPartida) => res.status(200).json(infoPartida))
      .catch((error) => this.handleError(error, res));
  };

  public obtenerMejoresPartidas = (req: Request, res: Response) => {
    const usuarioId = req.body.usuarioId;

    this.partidaService
      .obtenerMejoresPartidas(usuarioId)
      .then((historial) => res.status(200).json(historial))
      .catch((error) => this.handleError(error, res));
  };

  public obtenerEstadisticas = (req: Request, res: Response) => {
    this.partidaService
      .obtenerEstadisticasGlobales()
      .then((estadisiticas) => res.status(200).json(estadisiticas))
      .catch((error) => this.handleError(error, res));
  };
}
