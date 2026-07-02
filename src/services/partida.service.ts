import { ConfigurarPartidaDto } from "../dtos";
import { CustomError } from "../errors/CustomErros";
import { PalabraModel } from "../models/palabra.model";
import { PartidaModel } from "../models/partida.model";

export class PartidaService {
  public constructor(
    private readonly palabraModelo: PalabraModel,
    private readonly partidaModelo: PartidaModel,
  ) {}

  public async generarPartida(dto: ConfigurarPartidaDto, usuarioId: number) {
    try {
      const { ayudaAdicional, dificultadId, tiempoMaximo } = dto;

      const palabrasRosco =
        await this.palabraModelo.obtenerRoscoPalabra(dificultadId);

      if (palabrasRosco.length !== 27)
        throw CustomError.internalServerError(
          "Faltan palabras en la base de datos para completar el rosco de esta dificultad.",
        );

      const partidaId = await this.partidaModelo.crearPartida(
        usuarioId,
        dificultadId,
        tiempoMaximo,
        ayudaAdicional,
      );

      // 5. Retornamos todo empaquetado, incluyendo el nuevo ID
      return {
        partidaId, // Clave para actualizar el puntaje después
        configuracion: {
          tiempoMaximo,
          ayudaAdicional,
        },
        rosco: palabrasRosco,
      };
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServerError("Error al generar las partidas");
    }
  }
}
